import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog-service/catalog.service';

import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: ProductModel[];

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getProducts()
        .subscribe(products => this.products = products);
  }

}
