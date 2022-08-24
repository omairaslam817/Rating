import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAddPageComponent } from './rating-add-page.component';

describe('RatingAddPageComponent', () => {
  let component: RatingAddPageComponent;
  let fixture: ComponentFixture<RatingAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
