import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockerListOfImagesComponent } from './docker-list-of-images/docker-list-of-images.component';



@NgModule({
  declarations: [
    DockerListOfImagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DockerImagesModule { }
