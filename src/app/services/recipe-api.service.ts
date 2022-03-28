import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipe-list/recipe-list.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  private readonly API_URL: string = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  public getRecipe(id: string) {
    return this.http.get<Recipe>(`${this.API_URL}/${id}`);
  }

  public getRecipes() {
    return this.http.get<Recipe[]>(`${this.API_URL}`);
  }

  public getRecipesbySearch(value: string) {
    return this.http.get<Recipe[]>(`${this.API_URL}?name_like=${value}`);
  }

  public getRecipesBySort(value: string) {
    if (value === 'A-Z') {
      return this.http.get<Recipe[]>(`${this.API_URL}?_sort=name`);
    } else if (value === 'Z-A') {
      return this.http.get<Recipe[]>(`${this.API_URL}?_sort=name&_order=desc`);
    } else if (value === '5-1') {
      return this.http.get<Recipe[]>(
        `${this.API_URL}?_sort=rating&_order=desc`
      );
    } else if (value === '1-5') {
      return this.http.get<Recipe[]>(`${this.API_URL}?_sort=rating`);
    } else {
      return this.http.get<Recipe[]>(`${this.API_URL}`);
    }
  }
}
