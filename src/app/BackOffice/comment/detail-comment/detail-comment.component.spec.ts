import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommentComponent } from './detail-comment.component';

describe('DetailCommentComponent', () => {
  let component: DetailCommentComponent;
  let fixture: ComponentFixture<DetailCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
