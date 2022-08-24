import { createReducer,on } from "@ngrx/store";
import { Rating } from "../rating/rating";
import { ratingsFetchApiSuccess, invokeSaveNeRatingAPI } from "../store/rating.action";

export const initialState:ReadonlyArray<Rating> = [];
export const ratingReducer  = createReducer(
    initialState//sending initial state
    ,on(ratingsFetchApiSuccess,(state, {allRatings})=>{
        return allRatings;
    }),
    on(invokeSaveNeRatingAPI,(state,{newRating})=>{
        let newState = [...state];
    newState.unshift(newRating);
    return newState;
    })
)
