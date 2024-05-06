import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoyaltyComponent } from './show-loyalty.component';

describe('ShowLoyaltyComponent', () => {
  let component: ShowLoyaltyComponent;
  let fixture: ComponentFixture<ShowLoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoyaltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
