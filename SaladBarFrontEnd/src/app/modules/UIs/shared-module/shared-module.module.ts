import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarLinksOfSideBarComponent } from './sidebar/nav-bar-links-of-side-bar/nav-bar-links-of-side-bar.component';
import { IconsModuleModule } from './icons-module/icons-module.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavBarLinksOfSideBarComponent
  ],
  imports: [
    CommonModule, IconsModuleModule
  ],
  exports: [SidebarComponent, NavbarComponent, NavBarLinksOfSideBarComponent, IconsModuleModule]
})
export class SharedModuleModule { }
