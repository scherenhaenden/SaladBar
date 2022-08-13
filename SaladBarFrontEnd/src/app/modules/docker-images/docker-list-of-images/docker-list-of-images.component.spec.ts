import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerListOfImagesComponent } from './docker-list-of-images.component';

describe('DockerListOfImagesComponent', () => {
  let component: DockerListOfImagesComponent;
  let fixture: ComponentFixture<DockerListOfImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerListOfImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerListOfImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
