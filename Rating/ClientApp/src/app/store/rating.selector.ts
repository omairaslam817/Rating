import { createFeatureSelector } from "@ngrx/store";
import { Rating } from "../rating/rating";

export const selectRatings = createFeatureSelector<Rating>('myRatingStore');
// The 'createFeatureSelector' loads from the '@ngrx/store'.
// The 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'Ratings/App' module).
//Here the name of our selector 'myRatingStore'
// must be used to register the 'bookReducer' into the 'books.modulet.ts' to register the feature store or child store.
//Step
//Now register the reducer(eg: ratingReducer) and feature selector name(eg: 'myRatingStore') in the feature store module.