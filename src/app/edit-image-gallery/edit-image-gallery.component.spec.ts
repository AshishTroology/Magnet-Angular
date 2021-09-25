import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageGalleryComponent } from './edit-image-gallery.component';

describe('EditImageGalleryComponent', () => {
  let component: EditImageGalleryComponent;
  let fixture: ComponentFixture<EditImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
