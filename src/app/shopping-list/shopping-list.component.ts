import { Component, OnInit } from '@angular/core';
import {Ingredint} from '../shared/ingredints.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredints : Ingredint[] =[
  new Ingredint('Apple',5),
  new Ingredint('Tomatoes',10),
];
  constructor() { }

  ngOnInit() {
  }

}
