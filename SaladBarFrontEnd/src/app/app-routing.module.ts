import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'docker',
    loadChildren: () => import('./modules/docker/docker.module').then(m => m.DockerModule),
    //canLoad: [AuthGuardLoadServiceService] , data: {  expectedLevelRole: 3  }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
