import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarLinksOfSideBarComponent } from './sidebar/nav-bar-links-of-side-bar/nav-bar-links-of-side-bar.component';
import { IconsModuleModule } from './icons-module/icons-module.module';
import { SmallAddMenuComponent } from './small-add-menu/small-add-menu.component';
import {  RouterModule } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavBarLinksOfSideBarComponent,
    SmallAddMenuComponent,
    CardViewComponent
  ],
  imports: [
    CommonModule, IconsModuleModule, RouterModule
  ],
  exports: [SidebarComponent, NavbarComponent, NavBarLinksOfSideBarComponent, IconsModuleModule, SmallAddMenuComponent, CardViewComponent]
})
export class SharedModuleModule { }
