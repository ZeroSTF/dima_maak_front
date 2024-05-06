import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComplaintComponent } from './detail-complaint.component';

describe('DetailComplaintComponent', () => {
  let component: DetailComplaintComponent;
  let fixture: ComponentFixture<DetailComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
