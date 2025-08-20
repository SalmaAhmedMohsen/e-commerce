import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = "";
  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    return this._productsService.getProducts().subscribe({
      next: (data) => (this.products = data.products),
      error: (error) => console.log(error),
    });
  }
}
