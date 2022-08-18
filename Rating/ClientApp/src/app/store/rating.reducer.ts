import { createReducer } from "@ngrx/store";
import { Rating } from "../rating/rating";

export const initialState:Readonly<Rating> = {
    comment:'',
    rating:'',
};
export const ratingReducer  = createReducer(
    initialState//sending initial state
)
