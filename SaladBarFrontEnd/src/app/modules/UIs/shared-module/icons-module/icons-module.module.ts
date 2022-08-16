import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Camera, Heart, Github, Home, Airplay } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { IconViewComponent } from './icon-view/icon-view.component';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  Home,
  Airplay
};

@NgModule({
  declarations: [
    IconViewComponent
  ],
  imports: [
    CommonModule, FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule, IconViewComponent
  ]
})
export class IconsModuleModule { }
