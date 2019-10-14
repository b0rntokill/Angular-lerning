import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productsInCart: ProductModel[] = [];

  constructor(
    private cartService: CartService
  ) { }

  onDeleteProduct(product: ProductModel) {
    this.productsInCart = this.productsInCart.filter(item => item !== product);
    this.cartService.deleteProduct(product).subscribe();
  }

  ngOnInit() {
    this.cartService.getCart()
      .subscribe(productsInCart => this.productsInCart = productsInCart);
  }
}
