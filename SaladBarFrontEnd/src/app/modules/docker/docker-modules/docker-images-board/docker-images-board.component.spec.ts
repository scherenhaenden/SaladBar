import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerImagesBoardComponent } from './docker-images-board.component';

describe('DockerImagesBoardComponent', () => {
  let component: DockerImagesBoardComponent;
  let fixture: ComponentFixture<DockerImagesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerImagesBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerImagesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
