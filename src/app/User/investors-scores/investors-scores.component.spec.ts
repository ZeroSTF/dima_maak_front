import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsScoresComponent } from './investors-scores.component';

describe('InvestorsScoresComponent', () => {
  let component: InvestorsScoresComponent;
  let fixture: ComponentFixture<InvestorsScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorsScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorsScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
