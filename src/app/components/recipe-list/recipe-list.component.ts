import { Component, OnInit } from '@angular/core';

export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  value: string;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipesList: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {}
}
