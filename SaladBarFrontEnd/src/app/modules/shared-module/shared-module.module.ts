import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarLinksOfSideBarComponent } from './sidebar/nav-bar-links-of-side-bar/nav-bar-links-of-side-bar.component';
import { IconsModuleModule } from './icons-module/icons-module.module';
import { SmallAddMenuComponent } from './small-add-menu/small-add-menu.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavBarLinksOfSideBarComponent,
    SmallAddMenuComponent
  ],
  imports: [
    CommonModule, IconsModuleModule
  ],
  exports: [SidebarComponent, NavbarComponent, NavBarLinksOfSideBarComponent, IconsModuleModule, SmallAddMenuComponent]
})
export class SharedModuleModule { }
