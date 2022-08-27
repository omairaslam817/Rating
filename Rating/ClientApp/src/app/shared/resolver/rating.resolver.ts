import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Actions,ofType } from "@ngrx/effects";
import { State, Store } from "@ngrx/store";
import { ServiceService } from "src/app/service/service.service";
import { Appstate } from "../store/appstate";
import { invokeRatingAPI, invokeSaveNeRatingAPI, ratingsFetchApiSuccess, saveNewRatingAPISucess } from "../../store/rating.action";
import { EMPTY, map, mergeMap, withLatestFrom,switchMap, Observable } from "rxjs";
import { select } from "@ngrx/store";
import { selectRatings } from "../../store/rating.selector";
import { Rating } from "src/app/rating/rating";


@Injectable({
    providedIn: 'root'
 })
export class RatingReslover implements Resolve<any>{
    constructor(private ratingService:ServiceService,private store: Store<Appstate>,private actions$:Actions){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       return this.store.dispatch(invokeRatingAPI())
       
    }

}