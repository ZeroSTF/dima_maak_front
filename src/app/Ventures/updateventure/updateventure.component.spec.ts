import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateventureComponent } from './updateventure.component';

describe('UpdateventureComponent', () => {
  let component: UpdateventureComponent;
  let fixture: ComponentFixture<UpdateventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
