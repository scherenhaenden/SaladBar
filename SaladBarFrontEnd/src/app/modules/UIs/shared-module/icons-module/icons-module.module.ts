import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Camera, Heart, Github, Home, Airplay } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  Home,
  Airplay
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModuleModule { }
