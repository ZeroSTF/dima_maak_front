import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreturnsComponent } from './allreturns.component';

describe('AllreturnsComponent', () => {
  let component: AllreturnsComponent;
  let fixture: ComponentFixture<AllreturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
