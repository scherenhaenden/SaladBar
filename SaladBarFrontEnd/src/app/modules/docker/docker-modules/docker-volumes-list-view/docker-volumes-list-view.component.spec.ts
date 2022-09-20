import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerVolumesListViewComponent } from './docker-volumes-list-view.component';

describe('DockerVolumesListViewComponent', () => {
  let component: DockerVolumesListViewComponent;
  let fixture: ComponentFixture<DockerVolumesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerVolumesListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerVolumesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
