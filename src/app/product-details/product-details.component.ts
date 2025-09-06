import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  productInfo!: Product | undefined;
  quantity: number = 1;
  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id'];
    this.getProductDetails(this.productId);
  }
  getProductDetails(id: string) {
    this._productsService.getProductDetails(id).subscribe({
      next: (data) => (this.productInfo = data),
      error: (err) => console.log(err),
    });
  }
  addToCart(product: Product, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this._cartService.addToCart(product);
    }
    this.quantity = 1; //de quantity el class 8er quantity el parameter
  }
}
