import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionfooddetailsscreenComponent } from './nutritionfooddetailsscreen.component';

describe('NutritionfooddetailsscreenComponent', () => {
  let component: NutritionfooddetailsscreenComponent;
  let fixture: ComponentFixture<NutritionfooddetailsscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionfooddetailsscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionfooddetailsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});