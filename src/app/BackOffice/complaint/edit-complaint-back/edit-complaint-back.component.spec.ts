import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComplaintBackComponent } from './edit-complaint-back.component';

describe('EditComplaintBackComponent', () => {
  let component: EditComplaintBackComponent;
  let fixture: ComponentFixture<EditComplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComplaintBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
