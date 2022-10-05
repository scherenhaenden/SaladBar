import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DockerModuleRouting } from './docker-module-routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DockerModuleRouting,
    NgbModule
  ]
})
export class DockerModule { }
