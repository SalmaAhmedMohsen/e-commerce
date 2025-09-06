import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartCount: number = 0;
  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this.cartItems = this._cartService.getAddedItems();
    this._cartService.cartItemsCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  checkout() {
    Swal.fire({
      title: 'Your order is confirmed!',
      icon: 'success',
      draggable: false,
    });
    this._cartService.emptyCart();
  }

  deleteItem(i: number) {
    this._cartService.deleteItem(i);
  }
}
