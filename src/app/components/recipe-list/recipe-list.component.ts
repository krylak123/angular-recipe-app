import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from 'src/app/services/recipe-api.service';

export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingriedients: Ingredient[];
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

  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit(): void {
    this.recipeApiService.getRecipes();

    this.recipeApiService.recipeList.subscribe(
      (value) => (this.recipesList = value)
    );
  }
}
