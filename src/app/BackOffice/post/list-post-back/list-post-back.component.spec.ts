import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostBackComponent } from './list-post-back.component';

describe('ListPostBackComponent', () => {
  let component: ListPostBackComponent;
  let fixture: ComponentFixture<ListPostBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
