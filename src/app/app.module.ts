import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CatalogComponent, ProductsComponent, ProductDetailsComponent } from './components';
import { CatalogService, InMemoryDataService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
