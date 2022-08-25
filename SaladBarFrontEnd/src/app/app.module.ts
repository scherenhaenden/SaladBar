import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DockerModulesModule } from './modules/docker/docker-modules/docker-modules.module';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ContextViewDashboardComponent } from './views/context-view-dashboard/context-view-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    LoginViewComponent,
    ContextViewDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModuleModule,
    /* For HTTPCLIENT BEGIN*/
    HttpClientModule,
    /* For HTTPCLIENT END*/
    DockerModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
