import { Component, OnInit } from '@angular/core';
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

    const sideBarLinkObject2 = new SideBarLinkModel();

    sideBarLinkObject2.nameDescription = 'Docker - Images';
    sideBarLinkObject2.link = '/docker/images';
    sideBarLinkObject2.icon = 'Airplay';

    // https://www.npmjs.com/package/@fortawesome/angular-fontawesome

    this.sideBarLinkObjects.push(sideBarLinkObject1);
    this.sideBarLinkObjects.push(sideBarLinkObject2);
    this.sideBarLinkObjects.push(sideBarLinkObject1);
    this.sideBarLinkObjects.push(sideBarLinkObject1);
    this.sideBarLinkObjects.push(sideBarLinkObject1);
  }

}
