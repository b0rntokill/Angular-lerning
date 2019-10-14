import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() onDeleteProduct: EventEmitter<ProductModel> = new EventEmitter();

  constructor( ) { }

  deleteProduct(product: ProductModel) {
    this.onDeleteProduct.emit(product);
    console.log(product);
  }

  ngOnInit() {
  }

}
