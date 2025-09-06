import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  currentCategory: string = '';
  products: Product[] = [];

  constructor(
    private _productsService: ProductsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.currentCategory = this._route.snapshot.params['categoryName'];
    // this.getProductsByCategory(this.currentCategory);

    this._route.params.subscribe((params) => {
      this.currentCategory = params['categoryName'];
      this.getProductsByCategory(this.currentCategory);
    });
  }

  getProductsByCategory(category: string) {
    this._productsService.getProductsByCategory(category).subscribe({
      next: (data) => (this.products = data.products),
      error: (error) => console.log(error),
    });
  }
}
