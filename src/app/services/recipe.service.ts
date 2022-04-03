import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../components/recipe-list/recipe-list.component';
import { RecipeApiService } from './recipe-api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipe = new Subject<Recipe>();
  private recipeList = new Subject<Recipe[]>();

  public get recipe$() {
    return this.recipe.asObservable();
  }

  public get recipeList$() {
    return this.recipeList.asObservable();
  }

  constructor(private recipeApiService: RecipeApiService) {}

  public updateRecipe(value: Recipe) {
    this.recipe.next(value);
  }

  public updateRecipeList(value: Recipe[]) {
    this.recipeList.next(value);
  }

  public getRecipe(id: string) {
    this.recipeApiService
      .getRecipe(id)
      .subscribe((item) => this.updateRecipe(item));
  }

  public getRecipes() {
    this.recipeApiService
      .getRecipes()
      .subscribe((list) => this.updateRecipeList(list));
  }

  public getAuthorRecipes(id: number) {
    this.recipeApiService
      .getAuthorRecipes(id)
      .subscribe((list) => this.updateRecipeList(list));
  }

  public getRecipiesBySearch(value: string) {
    this.recipeApiService
      .getRecipesbySearch(value)
      .subscribe((list) => this.updateRecipeList(list));
  }

  public getRecipesBySort(value: string) {
    this.recipeApiService
      .getRecipesBySort(value)
      .subscribe((list) => this.updateRecipeList(list));
  }

  public postRecipe(recipe: Recipe) {
    this.recipeApiService.postRecipe(recipe).subscribe(() => this.getRecipes());
  }
}
