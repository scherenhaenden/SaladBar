import { Component, Input, OnInit } from '@angular/core';
import { CardViewModel } from 'src/app/models/card-view-model';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() cardView: CardViewModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
