import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ServiceService } from 'src/app/service/service.service';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { invokeSaveNeRatingAPI } from 'src/app/store/rating.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Rating } from 'src/app/store/rating';
@Component({
  selector: 'app-rating-add-page',
  templateUrl: './rating-add-page.component.html',
  styleUrls: ['./rating-add-page.component.css']
})
export class RatingAddPageComponent implements OnInit {

  public form: FormGroup;
  submitted = false;
  get comment() { return this.form.get('comment'); }
  get ratingform() { return this.form.controls; }

  constructor(private fb: FormBuilder,
    private ratingService: ServiceService
    , private router: Router,
    private store:Store) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.pattern('^[a-zA-Z ]*$')]
    });
  }
  ngOnInit(): void {
    
  }
  onFormSubmit(rating: Rating) {
    this.store.dispatch(invokeSaveNeRatingAPI({ newRating: this.form.value }));
    let apiStatus$ = this.store.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.store.dispatch( 
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
         this.router.navigate(['/rating']);
      }
    });
  }
}

