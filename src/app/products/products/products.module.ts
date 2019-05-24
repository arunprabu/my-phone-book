import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from '../products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { ProductsRoutingModule } from '../products-routing/products-routing.module';
import { RouterModule } from '@angular/router';

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
