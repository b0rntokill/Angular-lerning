import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { CatalogService } from '../../services/catalog.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
  ) {}

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.catalogService.getProductDetails(id)
      .subscribe(product => this.product = product);
  }

  ngOnInit(): void {
    this.getHero();
  }

}
