import { Component, OnInit } from '@angular/core';

import { CatalogService } from 'src/app/services';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products: ProductModel[];

  constructor(    
    private catalogService: CatalogService
    ) { }

  ngOnInit() {
    this.catalogService.getProducts()
      .subscribe(products => this.products = products);
  }

}
