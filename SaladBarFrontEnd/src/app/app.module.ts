import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModuleModule } from './modules/UIs/shared-module/shared-module.module';
import { HttpClientModule } from '@angular/common/http';
import { DockerModulesModule } from './modules/docker/docker-modules/docker-modules.module';

@NgModule({
  declarations: [
    AppComponent
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
