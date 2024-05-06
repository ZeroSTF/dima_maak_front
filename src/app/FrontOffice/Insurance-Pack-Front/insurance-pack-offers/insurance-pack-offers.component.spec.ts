import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePackOffersComponent } from './insurance-pack-offers.component';

describe('InsurancePackOffersComponent', () => {
  let component: InsurancePackOffersComponent;
  let fixture: ComponentFixture<InsurancePackOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePackOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancePackOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
