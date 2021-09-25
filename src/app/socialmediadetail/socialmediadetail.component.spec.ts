import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediadetailComponent } from './socialmediadetail.component';

describe('SocialmediadetailComponent', () => {
  let component: SocialmediadetailComponent;
  let fixture: ComponentFixture<SocialmediadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediadetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
