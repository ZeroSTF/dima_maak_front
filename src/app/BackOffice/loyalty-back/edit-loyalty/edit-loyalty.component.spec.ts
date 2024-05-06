import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoyaltyComponent } from './edit-loyalty.component';

describe('EditLoyaltyComponent', () => {
  let component: EditLoyaltyComponent;
  let fixture: ComponentFixture<EditLoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoyaltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
