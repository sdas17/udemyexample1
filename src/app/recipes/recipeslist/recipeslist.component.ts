import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.modal';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.scss']
})
export class RecipeslistComponent implements OnInit {

  constructor() { }
recipes:Recipes[]=[
  new Recipes  ('A test recipe','This is simple test','https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
  new Recipes  ('A test recipe','This is simple test','https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
  new Recipes  ('A test recipe','This is simple test','https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/480px-Recipe_logo.jpeg'),
]
  ngOnInit(): void {
  }

}
