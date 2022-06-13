import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string = '';
  recipeDetails: any = {};
  healthLabel: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params) => {
      this.recipeId = params['id'];
      this.getRecipeDetails(this.recipeId);
    });
  }

  ngOnInit(): void {}

  getRecipeDetails(recipeId: string) {
    this.apiService.getRecipeDetails(recipeId).subscribe(
      (response) => {
        this.recipeDetails = response;
      },
      (error) => console.error(error)
    );
  }

  parseHealthLabels(healthLabels: Array<string>): string {
    return healthLabels?.join(', ');
  }
}
