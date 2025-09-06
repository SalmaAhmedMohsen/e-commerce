import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchService: any;
  cartCount: number = 0;

  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this._cartService.cartItemsCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }
}
