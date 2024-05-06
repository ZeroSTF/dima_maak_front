import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddventureComponent } from './addventure.component';

describe('AddventureComponent', () => {
  let component: AddventureComponent;
  let fixture: ComponentFixture<AddventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
