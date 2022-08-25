import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerImagesBoardComponent } from './docker-images-board/docker-images-board.component';
import { DockerNetworkListViewComponent } from './docker-network-list-view/docker-network-list-view.component';
import { DockerImagesListViewComponent } from './docker-images-list-view/docker-images-list-view.component';
import { DockerContainersListViewComponent } from './docker-containers-list-view/docker-containers-list-view.component';
import { DockerGenericListViewComponent } from './docker-generic-list-view/docker-generic-list-view.component';



@NgModule({
  declarations: [
    DockerImagesBoardComponent,
    DockerNetworkListViewComponent,
    DockerImagesListViewComponent,
    DockerContainersListViewComponent,
    DockerGenericListViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DockerImagesBoardComponent]
})
export class DockerModulesModule { }
