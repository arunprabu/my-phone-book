import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../products.component';
import { CartComponent } from '../cart/cart.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

//Setup Feature Routing
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
