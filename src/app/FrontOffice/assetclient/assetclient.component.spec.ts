import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetclientComponent } from './assetclient.component';

describe('AssetclientComponent', () => {
  let component: AssetclientComponent;
  let fixture: ComponentFixture<AssetclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
