import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: ProductModel;

  constructor(
    private cartService: CartService
  ) { }

  public addToCart(product: ProductModel): void {
    this.cartService.addToCart(product).subscribe();
  }

  ngOnInit() {
  }

}
