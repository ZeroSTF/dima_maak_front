import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinvestmentsComponent } from './allinvestments.component';

describe('AllinvestmentsComponent', () => {
  let component: AllinvestmentsComponent;
  let fixture: ComponentFixture<AllinvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllinvestmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllinvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
