import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this._httpClient.get('https://dummyjson.com/products?limit=194');
  }
  getProductDetails(id: string): Observable<any> {
    return this._httpClient.get(`https://dummyjson.com/products/${id}`);
  }
  getCustomersFeedback(): Observable<any>{
  return this._httpClient.get('https://dummyjson.com/quotes')
  }
  getProductsByCategory(category: string): Observable<any> {
    return this._httpClient.get(`https://dummyjson.com/products/category/${category}`)
  }
}