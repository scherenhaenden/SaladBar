import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerContainersListViewComponent } from './docker-containers-list-view.component';

describe('DockerContainersListViewComponent', () => {
  let component: DockerContainersListViewComponent;
  let fixture: ComponentFixture<DockerContainersListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerContainersListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerContainersListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
