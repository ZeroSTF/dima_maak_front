import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentformComponent } from './investmentform.component';

describe('InvestmentformComponent', () => {
  let component: InvestmentformComponent;
  let fixture: ComponentFixture<InvestmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
