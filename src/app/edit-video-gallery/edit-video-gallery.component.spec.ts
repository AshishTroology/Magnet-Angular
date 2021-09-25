import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideoGalleryComponent } from './edit-video-gallery.component';

describe('EditVideoGalleryComponent', () => {
  let component: EditVideoGalleryComponent;
  let fixture: ComponentFixture<EditVideoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVideoGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
