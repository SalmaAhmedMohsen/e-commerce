import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = environment.baseUrl
  constructor(private _httpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products?limit=194`);
  }
  getProductDetails(id: string): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products/${id}`);
  }
  getCustomersFeedback(): Observable<any>{
  return this._httpClient.get(`${this.baseUrl}/quotes`)
  }
  getProductsByCategory(category: string): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/products/category/${category}`)
  }
}