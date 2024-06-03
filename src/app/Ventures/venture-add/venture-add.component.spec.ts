import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureAddComponent } from './venture-add.component';

describe('VentureAddComponent', () => {
  let component: VentureAddComponent;
  let fixture: ComponentFixture<VentureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentureAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
