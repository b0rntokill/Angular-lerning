import { Injectable } from '@angular/core';

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

  public getProducts() {
    return this.productsInCart;
  }

  public clearCart() {
    this.productsInCart = [];
    return this.productsInCart;
  }
}
