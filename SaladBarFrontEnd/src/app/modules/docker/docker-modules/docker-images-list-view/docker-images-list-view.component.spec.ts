import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerImagesListViewComponent } from './docker-images-list-view.component';

describe('DockerImagesListViewComponent', () => {
  let component: DockerImagesListViewComponent;
  let fixture: ComponentFixture<DockerImagesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerImagesListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerImagesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
