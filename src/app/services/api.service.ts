import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  searchRecipe(recipeName: string) {
    return this.http.get(
      `${this.baseUrl}?type=public&q=${recipeName}&app_id=a6e30728&app_key=c0a5981e21f5580d317a4c3377da07a7`
    );
  }

  getRecipeDetails(recipeId: string) {
    return this.http.get(
      `${this.baseUrl}/${recipeId}?type=public&app_id=a6e30728&app_key=c0a5981e21f5580d317a4c3377da07a7`
    );
  }
}
