import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsComponent } from './admin-ins.component';

describe('AdminInsComponent', () => {
  let component: AdminInsComponent;
  let fixture: ComponentFixture<AdminInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
