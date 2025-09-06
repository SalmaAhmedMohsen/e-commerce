import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

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




//Search Inhancemet

// import { Component, OnInit } from '@angular/core';
// import { Product } from '../product';
// import { ProductsService } from '../products.service';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css'],
// })
// export class SearchComponent implements OnInit {
//   products: Product[] = [];
//   searchTerm: string = "";
//   isSearchOpen: boolean = false;

//   constructor(private _productsService: ProductsService) {}

//   ngOnInit(): void {
//     this.getProducts();
//   }

//   getProducts() {
//     this._productsService.getProducts().subscribe({
//       next: (data) => (this.products = data.products),
//       error: (error) => console.log(error),
//     });
//   }

//   openSearch() {
//     this.isSearchOpen = true;
//   }

//   closeSearch() {
//     this.isSearchOpen = false;
//     this.searchTerm = '';
//   }

//   filteredProducts(): Product[] {
//     if (!this.searchTerm) return [];
//     return this.products.filter(p =>
//       p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }
// }
