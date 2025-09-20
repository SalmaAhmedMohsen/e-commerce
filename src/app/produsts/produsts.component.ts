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
  isList: boolean = false;
  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    const list = localStorage.getItem('isList');
    if(list){
      this.isList = JSON.parse(list)
    }
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

  changeDisplay(){
    this.isList = !this.isList;
    localStorage.setItem('isList', JSON.stringify(this.isList))
  }
}
