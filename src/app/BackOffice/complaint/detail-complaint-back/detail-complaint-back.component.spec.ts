import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComplaintBackComponent } from './detail-complaint-back.component';

describe('DetailComplaintBackComponent', () => {
  let component: DetailComplaintBackComponent;
  let fixture: ComponentFixture<DetailComplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComplaintBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
