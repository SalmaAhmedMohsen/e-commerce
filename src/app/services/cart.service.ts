import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  private cartItemsCount = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCount.asObservable();

  constructor() {}
  //To calculate the quantity of all items in the cart
  updateCartCount() {
    let total = this.items.reduce((sum, item) => sum + (item.quantity || 0), 0); //el reduce btlf 3la 3adad el items
    this.cartItemsCount.next(total);
  }

  addToCart(product: Product) {
    let foundItem = this.items.find((el) => el.id === product.id); //return the found items and the type is product
    if (!foundItem) {
      this.items.push(product); //1
      product.quantity = 1;
    } else {
      foundItem.quantity = (foundItem.quantity || 0) + 1; //2
    }
    this.updateCartCount();
  }

  deleteItem(i: number) {
    this.items.splice(i, 1);
    this.updateCartCount();
  }

  getAddedItems() {
    return this.items;
  }

  emptyCart() {
    this.items.length = 0;
    this.updateCartCount();
  }
}
