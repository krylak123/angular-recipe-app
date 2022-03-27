import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../components/recipe-list/recipe-list.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  public recipeList = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  setRecipeList(value: Recipe[]) {
    this.recipeList.next(value);
  }

  public getRecipe(id: string) {
    return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
  }

  public getRecipes() {
    this.http
      .get<Recipe[]>('http://localhost:3000/recipes')
      .subscribe((res) => this.setRecipeList(res));
  }

  public getSortRecipes(sortValue: string) {
    switch (sortValue) {
      case 'A-Z':
        this.http
          .get<Recipe[]>('http://localhost:3000/recipes?_sort=name')
          .subscribe((res) => this.setRecipeList(res));
        break;
      case 'Z-A':
        this.http
          .get<Recipe[]>('http://localhost:3000/recipes?_sort=name&_order=desc')
          .subscribe((res) => this.setRecipeList(res));
        break;
      case '5-1':
        this.http
          .get<Recipe[]>(
            'http://localhost:3000/recipes?_sort=rating&_order=desc'
          )
          .subscribe((res) => this.setRecipeList(res));
        break;
      case '1-5':
        this.http
          .get<Recipe[]>('http://localhost:3000/recipes?_sort=rating')
          .subscribe((res) => this.setRecipeList(res));
        break;
    }
  }
}
