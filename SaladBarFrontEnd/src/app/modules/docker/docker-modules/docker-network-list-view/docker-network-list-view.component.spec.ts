import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerNetworkListViewComponent } from './docker-network-list-view.component';

describe('DockerNetworkListViewComponent', () => {
  let component: DockerNetworkListViewComponent;
  let fixture: ComponentFixture<DockerNetworkListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerNetworkListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerNetworkListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
