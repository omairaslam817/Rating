import { createAction, props } from "@ngrx/store";
import { Rating } from "../rating/rating";

export const invokeRatingAPI  = createAction(
    '[Ratings Api] Invoke Ratings Fetch Api'
);

export const ratingsFetchApiSuccess = createAction(
    '[Ratings Api] Fetch Api Success',
    props<{allRatings:Rating[]}>()
);


  export const invokeSaveNeRatingAPI = createAction(
    '[Ratings Api] Invoke Ratings save Api',
    props<{newRating:Rating}>()
  );
  export const saveNewRatingAPISucess = createAction (
    '[Ratings Api] save new book api success',
    props<{newRating:any}>()
  );
//The 'Actions' represents the events raised by the component
// to communicate either with reducers or effects to update the data to store. Let's create a 'Rating' action.
