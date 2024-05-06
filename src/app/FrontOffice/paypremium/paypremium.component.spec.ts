import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypremiumComponent } from './paypremium.component';

describe('PaypremiumComponent', () => {
  let component: PaypremiumComponent;
  let fixture: ComponentFixture<PaypremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
