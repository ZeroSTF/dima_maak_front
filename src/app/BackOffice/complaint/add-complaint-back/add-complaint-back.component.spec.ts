import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintBackComponent } from './add-complaint-back.component';

describe('AddComplaintBackComponent', () => {
  let component: AddComplaintBackComponent;
  let fixture: ComponentFixture<AddComplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplaintBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
