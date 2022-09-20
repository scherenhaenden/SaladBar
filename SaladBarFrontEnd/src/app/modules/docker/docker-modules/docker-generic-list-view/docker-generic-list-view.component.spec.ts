import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerGenericListViewComponent } from './docker-generic-list-view.component';

describe('DockerGenericListViewComponent', () => {
  let component: DockerGenericListViewComponent;
  let fixture: ComponentFixture<DockerGenericListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerGenericListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerGenericListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
