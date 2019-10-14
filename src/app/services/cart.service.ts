import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductModel } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = 'api/cart';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  public addToCart(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.cartUrl, product, this.httpOptions)
  }

  public getCart(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.cartUrl)
  }

  public deleteProduct(product: ProductModel | number): Observable<ProductModel[]> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.cartUrl}/${id}`;
    
    return this.http.delete<ProductModel[]>(url, this.httpOptions)
  }
}
