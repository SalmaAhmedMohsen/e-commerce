import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-produsts',
  templateUrl: './produsts.component.html',
  styleUrls: ['./produsts.component.css'],
})
export class ProdustsComponent implements OnInit{
  products: Product[] = [];
  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productsService.getProducts().subscribe({
      next: (data) => {this.products = data.products;
        console.log(this.products);
        
      },
      error: (err) => console.log(err),
    });
  }
}
