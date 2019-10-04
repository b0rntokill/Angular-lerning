import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>('/assets/products.json')
  }
}
