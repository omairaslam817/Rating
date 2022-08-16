import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { Injectable } from "@angular/core";
@Injectable()
export class ErrorIntercept  implements HttpInterceptor{
    constructor(public router: Router,private toastr: ToastrService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req)
       .pipe( catchError((error: HttpErrorResponse):Observable<HttpEvent<any>> => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Status: Some thing went wrong`;
            console.log(`error status : ${error.status} ${error.statusText}`);
        switch (error.status) {
            case 500:      //internal server 
            this.toastr.error(errorMessage);
            break;
            case 0:      //Not responding server 
            this.toastr.error('Api server is not responding.');
                break;
            case 404:     //method not found
                this.router.navigateByUrl("/unauthorized");
                break;
        }
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }))
    }

}
