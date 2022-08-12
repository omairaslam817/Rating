import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rating } from './rating/rating';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  rating3: number;
  public form: FormGroup;

  constructor(private fb: FormBuilder,private ratingService:ServiceService,private router: Router){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
      comment:[]
    });
  }
  onFormSubmit(form:FormGroup) {  debugger
    const rating = this.form.value;  
    this.saveRating(rating);  
  } 

  saveRating(rating: Rating) {
    debugger;
    this.ratingService.saveData(rating).subscribe(
      () => {
        alert("data saved");
        this.router.navigate(['/']);
      })  
  }
}
