import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandedfoodComponent } from './recommandedfood.component';

describe('RecommandedfoodComponent', () => {
  let component: RecommandedfoodComponent;
  let fixture: ComponentFixture<RecommandedfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandedfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandedfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});