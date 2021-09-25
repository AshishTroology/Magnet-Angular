import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiImageComponent } from './upi-image.component';

describe('UpiImageComponent', () => {
  let component: UpiImageComponent;
  let fixture: ComponentFixture<UpiImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
