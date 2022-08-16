import { Component, OnInit } from '@angular/core';
import { BootstrapFamily, FeatherFamily, IconFamily } from './models/icon-family';
import { IconTypeModel } from './models/icon-type-model';
import { SideBarLinkModel } from './models/side-bar-link-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sideBarLinkObjects!: SideBarLinkModel [];

  constructor() { }

  ngOnInit(): void {
    this.loadSideBarLinkObjects();
  }

  public loadSideBarLinkObjects(): void {
    this.sideBarLinkObjects = [];

    const sideBarLinkObject1 = new SideBarLinkModel();

    sideBarLinkObject1.nameDescription = 'Dashboard - Home';
    sideBarLinkObject1.link = '/';
    sideBarLinkObject1.icon = 'home';
    sideBarLinkObject1.iconTypeModel = new IconTypeModel( IconFamily.Feather, FeatherFamily.Home);
    sideBarLinkObject1.isLinkActive = true;

    const sideBarLinkObject2 = new SideBarLinkModel();

    sideBarLinkObject2.nameDescription = 'Docker - Images';
    sideBarLinkObject2.link = '/docker/images';
    sideBarLinkObject2.icon = 'Airplay';
    sideBarLinkObject2.iconTypeModel = new IconTypeModel( IconFamily.Feather, FeatherFamily.Airplay);

    const sideBarLinkObject3 = new SideBarLinkModel();
    sideBarLinkObject3.nameDescription = 'Git';
    sideBarLinkObject3.link = '/Git/Home';
    sideBarLinkObject3.icon = 'Git';
    sideBarLinkObject3.iconTypeModel = new IconTypeModel( IconFamily.Bootstrap, BootstrapFamily.Git);

    // https://www.npmjs.com/package/@fortawesome/angular-fontawesome

    this.sideBarLinkObjects.push(sideBarLinkObject1);
    this.sideBarLinkObjects.push(sideBarLinkObject2);
    this.sideBarLinkObjects.push(sideBarLinkObject3);
    this.sideBarLinkObjects.push(sideBarLinkObject1);
    this.sideBarLinkObjects.push(sideBarLinkObject1);
  }

}
