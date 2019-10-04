import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog-service/catalog.service';

import { ProductModel } from '../../models/product.model';

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
