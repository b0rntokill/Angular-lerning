import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductModel } from 'src/app/models/product.model';

import { CatalogService, CartService } from 'src/app/services';

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
    private cartService: CartService,
    private location: Location
  ) {}

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  getProductDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.catalogService.getProductDetails(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

}
