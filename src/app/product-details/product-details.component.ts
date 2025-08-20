import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string = "";
  productInfo!: Product | undefined;
  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params["id"];
    this.getProductDetails(this.productId)
  }
  getProductDetails(id: string) {
    this._productsService.getProductDetails(id).subscribe({
      next: (data) => this.productInfo = data,
      error: (err) => console.log(err),
    });
  }
}
