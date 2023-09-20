import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurentComponent } from './list-restaurent.component';

describe('ListRestaurentComponent', () => {
  let component: ListRestaurentComponent;
  let fixture: ComponentFixture<ListRestaurentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRestaurentComponent]
    });
    fixture = TestBed.createComponent(ListRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
