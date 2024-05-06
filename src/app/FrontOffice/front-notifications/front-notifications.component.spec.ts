import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNotificationsComponent } from './front-notifications.component';

describe('FrontNotificationsComponent', () => {
  let component: FrontNotificationsComponent;
  let fixture: ComponentFixture<FrontNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
