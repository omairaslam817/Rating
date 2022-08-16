import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Rating } from './rating';

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
    , private router: Router) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.pattern('^[a-zA-Z ]*$')]
    });
  }
  ngOnInit(): void {
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
