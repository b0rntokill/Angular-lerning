import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsUrl)
  }

  public getProductDetails(id: number): Observable<ProductModel> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<ProductModel>(url);
  }
}
