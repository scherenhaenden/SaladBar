import { Component, Input, OnInit } from '@angular/core';
import { IconFamily } from '../../sidebar/models/icon-family';
import { IconTypeModel } from '../../sidebar/models/icon-type-model';

@Component({
  selector: 'app-icon-view',
  templateUrl: './icon-view.component.html',
  styleUrls: ['./icon-view.component.css']
})
export class IconViewComponent implements OnInit {

  @Input()
  iconTypeModel!: IconTypeModel;

  public constIconFamily = IconFamily;

  constructor() { }

  ngOnInit(): void {
  }

}
