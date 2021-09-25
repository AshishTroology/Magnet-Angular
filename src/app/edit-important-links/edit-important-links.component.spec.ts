import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImportantLinksComponent } from './edit-important-links.component';

describe('EditImportantLinksComponent', () => {
  let component: EditImportantLinksComponent;
  let fixture: ComponentFixture<EditImportantLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImportantLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImportantLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
