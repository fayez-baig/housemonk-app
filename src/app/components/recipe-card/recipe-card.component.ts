import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleRecipeDetails(uri: string) {
    const id = uri.split('#')[1];
    this.router.navigate(['/recipe-details', id]);
  }
}
