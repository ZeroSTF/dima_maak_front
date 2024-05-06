import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepackComponent } from './insurancepack.component';

describe('InsurancepackComponent', () => {
  let component: InsurancepackComponent;
  let fixture: ComponentFixture<InsurancepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancepackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
