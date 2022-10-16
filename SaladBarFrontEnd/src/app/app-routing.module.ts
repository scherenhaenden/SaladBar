import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/security/auth-guard.service';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home', component: HomeViewComponent,
    canActivate: [AuthGuardService]

  },
  { path: 'login', component: LoginViewComponent  },
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
