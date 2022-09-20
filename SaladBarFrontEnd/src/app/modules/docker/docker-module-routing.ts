import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockerImagesListViewComponent } from './docker-modules/docker-images-list-view/docker-images-list-view.component';
import { DockerNetworkListViewComponent } from './docker-modules/docker-network-list-view/docker-network-list-view.component';

const routes: Routes = [
  {path: '', component: DockerImagesListViewComponent},
  {path: 'images', component: DockerImagesListViewComponent},
  {path: 'networks', component: DockerNetworkListViewComponent},
  {path: 'volumes', component: DockerNetworkListViewComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DockerModuleRouting {
}
