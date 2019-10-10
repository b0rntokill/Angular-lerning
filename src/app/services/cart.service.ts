import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productsInCart: ProductModel[] = [];

  constructor() { }

  public addToCart(product: ProductModel) {
    this.productsInCart.push(product);
  }

  public getProducts(): ProductModel[] {
    return this.productsInCart;
  }

  public clearCart(): ProductModel[] {
    this.productsInCart = [];
    return this.productsInCart;
  }
}
