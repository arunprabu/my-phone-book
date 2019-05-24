import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';

//Feature Module for Product 
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    ProductsRoutingModule,
    RouterModule,
    CommonModule
  ]
})
export class ProductsModule { }
