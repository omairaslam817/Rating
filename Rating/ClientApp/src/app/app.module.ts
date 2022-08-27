import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {  ServiceService } from './service/service.service';
import { ErrorIntercept } from './interceptor/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RatingComponent } from './rating/rating.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ratingReducer } from './store/rating.reducer'; 
import { environment } from '../environments/environment';
import { RatingEffect } from './store/rating.effect';
import { RatingAddPageComponent } from './rating/add/rating-add-page/rating-add-page.component';
import { appReducer } from './shared/store/app.reducer';
import { RatingReslover } from './shared/resolver/rating.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RatingComponent,
    RatingAddPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgxStarRatingModule,
                  ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'rating', component: RatingComponent, resolve: {
        resolver:RatingReslover
      }
     },
      { path: 'add-rating', component: RatingAddPageComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]), StoreModule.forRoot({appState:appReducer}),
     EffectsModule.forRoot([RatingEffect]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      StoreModule.forFeature('myRatingStore',ratingReducer) //register feature selector name with reducer ratingReducer
  ],
  providers: [ServiceService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorIntercept,
    multi: true
  }
   ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
  