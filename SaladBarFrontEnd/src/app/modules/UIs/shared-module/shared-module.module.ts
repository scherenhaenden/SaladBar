import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarLinksOfSideBarComponent } from './sidebar/nav-bar-links-of-side-bar/nav-bar-links-of-side-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavBarLinksOfSideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, NavbarComponent, NavBarLinksOfSideBarComponent]
})
export class SharedModuleModule { }
