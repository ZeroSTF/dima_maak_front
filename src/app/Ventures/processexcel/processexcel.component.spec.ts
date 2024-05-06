import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessexcelComponent } from './processexcel.component';

describe('ProcessexcelComponent', () => {
  let component: ProcessexcelComponent;
  let fixture: ComponentFixture<ProcessexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessexcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
