import { createReducer,on } from "@ngrx/store";
import { Rating } from "../rating/rating";
import { ratingsFetchApiSuccess } from "../store/rating.action";

export const initialState:ReadonlyArray<Rating> = [];
export const ratingReducer  = createReducer(
    initialState//sending initial state
    ,on(ratingsFetchApiSuccess,(state, {allRatings})=>{debugger
        return allRatings;
    })
)
