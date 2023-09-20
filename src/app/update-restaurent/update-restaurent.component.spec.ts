import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurentComponent } from './update-restaurent.component';

describe('UpdateRestaurentComponent', () => {
  let component: UpdateRestaurentComponent;
  let fixture: ComponentFixture<UpdateRestaurentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRestaurentComponent]
    });
    fixture = TestBed.createComponent(UpdateRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
