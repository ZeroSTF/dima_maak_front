import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturesfrontComponent } from './venturesfront.component';

describe('VenturesfrontComponent', () => {
  let component: VenturesfrontComponent;
  let fixture: ComponentFixture<VenturesfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenturesfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenturesfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
