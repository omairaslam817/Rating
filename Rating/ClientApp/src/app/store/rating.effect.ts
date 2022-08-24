import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from "rxjs";
import { ServiceService } from "../service/service.service";
import { invokeRatingAPI, ratingsFetchApiSuccess } from "../store/rating.action";
import { selectRatings } from "../store/rating.selector";


@Injectable()
export class RatingEffect {
    constructor(
        private actions$:Actions,
        private ratingService:ServiceService,
        private store:Store
    ){}
    loadAllBooks$:any = createEffect(() =>
    {
        debugger
            return this.actions$.pipe(
                ofType(invokeRatingAPI),
                withLatestFrom(this.store.pipe(select(selectRatings))),  //The 'withLatestFrom' loads from the 'rxjs'. It outputs the latest result of an observable. Here 'this.store.pipe(select(selectBooks))' trying to fetch the data from the store if already exist.
                mergeMap(([, bookformStore]) => {
                    if (bookformStore.length > 0) {
                        return EMPTY;
                    }
                    return this.ratingService
                        .getData()
                        .pipe(map((data) => ratingsFetchApiSuccess({ allRatings: data })));
                })
            );
    }
  );

}
// The 'RatingEffect' class is just an injectable service. In the next steps, we write actions
// and trigger effects to invoke the API calls in this service.
//Step
//Now register our 'BooksEffect' with 'EffectsModule' in 'books.module.ts'.

