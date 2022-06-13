import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.searchRecipe('salad').subscribe(
      (response: any) => {
        this.recipes = response.hits;
      },
      (err) => console.log(err)
    );
  }

  handleSearchRecipe(event: any): void {
    this.apiService.searchRecipe(event.target?.value || 'salad	').subscribe(
      (response: any) => {
        this.recipes = response.hits;
      },
      (err) => console.log(err)
    );
  }
}
