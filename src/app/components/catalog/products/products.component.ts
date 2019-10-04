import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
