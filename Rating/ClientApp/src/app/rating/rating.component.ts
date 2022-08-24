import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ServiceService } from '../service/service.service';
import { Rating } from './rating';
import { selectRatings } from '../store/rating.selector';
import { invokeRatingAPI } from '../store/rating.action';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

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
ratings$ = this.store.pipe(select(selectRatings))

  ngOnInit(): void {
    this.store.dispatch(invokeRatingAPI())
  }

  onFormSubmit(form: FormGroup) {
    this.submitted = true;
    const rating = this.form.value;
    this.saveRating(rating);
  }

  saveRating(rating: Rating) {
    this.ratingService.saveData(rating).subscribe(
      () => {
        alert("data saved");
        this.router.navigate(['/']);
      })
  }

}
