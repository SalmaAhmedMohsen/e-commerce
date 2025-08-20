import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-produsts',
  templateUrl: './produsts.component.html',
  styleUrls: ['./produsts.component.css'],
})
export class ProdustsComponent implements OnInit{
  // products: Product[] = [];

  // ngOnInit() {
  //   this.getProducts();
  // }
  // constructor(private _productsService: ProductsService) {}
  // getProducts() {
  //   this._productsService.getProducts().subscribe({
  //     next: (data) => (this.products = data.products),
  //     error: (err) => console.log(err),
  //   });
  // }
  products: Product[] = [];
  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productsService.getProducts().subscribe({
      next: (data) => this.products = data.products,
      error: (err) => console.log(err),
    });
  }
}
