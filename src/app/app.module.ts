import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from 'src/app/app.component';
import { CatalogComponent, ProductsComponent, ProductDetailsComponent, CartComponent, ProductInCartComponent } from 'src/app/components';
import { CatalogService, InMemoryDataService, CartService } from 'src/app/services';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductInCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CatalogService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
