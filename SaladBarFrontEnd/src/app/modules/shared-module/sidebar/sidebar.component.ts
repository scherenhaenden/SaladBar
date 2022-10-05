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


    const sideBarLinkObject4 = new SideBarLinkModel();
    sideBarLinkObject4.nameDescription = 'Git';
    sideBarLinkObject4.link = '/Git/Home';
    sideBarLinkObject4.icon = 'Git';
    sideBarLinkObject4.iconTypeModel = new IconTypeModel( IconFamily.Bootstrap, BootstrapFamily.Git);

    // https://www.npmjs.com/package/@fortawesome/angular-fontawesome

    // Create Bottom for Docker images
    const dockerImages = this.createSideBarLinkModel('Docker - Images', '/docker/images', 'Airplay', new IconTypeModel( IconFamily.Feather, FeatherFamily.Airplay), false);

    // Create Bottom for Docker Containers
    const dockerContainers = this.createSideBarLinkModel('Docker - Containers', '/docker/containers', 'Airplay', new IconTypeModel( IconFamily.Feather, FeatherFamily.Airplay), false);

    // Create Bottom for Docker Networks
    const dockerNetworks = this.createSideBarLinkModel('Docker - Networks', '/docker/networks', 'Airplay', new IconTypeModel( IconFamily.Feather, FeatherFamily.Airplay), false);

    // Create Bottom for Docker Volumes
    const dockerVolumes = this.createSideBarLinkModel('Docker - Volumes', '/docker/volumes', 'Airplay', new IconTypeModel( IconFamily.Feather, FeatherFamily.Airplay), false);


    this.sideBarLinkObjects.push(sideBarLinkObject1);
    this.sideBarLinkObjects.push(dockerImages);
    this.sideBarLinkObjects.push(dockerContainers);
    this.sideBarLinkObjects.push(dockerNetworks);
    this.sideBarLinkObjects.push(dockerVolumes);
    this.sideBarLinkObjects.push(sideBarLinkObject3);

  }

  // Method to Create SideBarLinkModel
  public createSideBarLinkModel(nameDescription: string, link: string, icon: string, iconTypeModel: IconTypeModel, isLinkActive: boolean): SideBarLinkModel {
    const sideBarLinkObject = new SideBarLinkModel();

    sideBarLinkObject.nameDescription = nameDescription;
    sideBarLinkObject.link = link;
    sideBarLinkObject.icon = icon;
    sideBarLinkObject.iconTypeModel = iconTypeModel;
    sideBarLinkObject.isLinkActive = isLinkActive;

    return sideBarLinkObject;
  }


}
