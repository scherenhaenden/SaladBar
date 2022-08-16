import { Component, Input, OnInit } from '@angular/core';
import { IconFamily } from '../models/icon-family';
import { SideBarLinkModel } from '../models/side-bar-link-model';

@Component({
  selector: 'app-nav-bar-links-of-side-bar',
  templateUrl: './nav-bar-links-of-side-bar.component.html',
  styleUrls: ['./nav-bar-links-of-side-bar.component.css']
})
export class NavBarLinksOfSideBarComponent implements OnInit {

  @Input() sideBarLinkObject!: SideBarLinkModel;
  @Input() isLinkActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
