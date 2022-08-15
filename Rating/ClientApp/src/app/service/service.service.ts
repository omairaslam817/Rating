import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rating } from '../rating/rating';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })
  }  

  readonly baseURL = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getData(){  
       
    return this.http.get<Rating[]>(this.baseURL+'/api/Rating');     
  }  
  
  saveData(rating:Rating){  
    return this.http.post<Rating[]>(this.baseURL+'/api/Rating', rating,this.httpOptions)    
  }  
}
