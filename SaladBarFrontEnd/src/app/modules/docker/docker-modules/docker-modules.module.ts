import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerImagesBoardComponent } from './docker-images-board/docker-images-board.component';



@NgModule({
  declarations: [
    DockerImagesBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DockerImagesBoardComponent]
})
export class DockerModulesModule { }
