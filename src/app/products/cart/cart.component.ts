import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from '../../shared/services/shopping-cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  cartItemsList: any[];
  constructor( private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.shoppingCartDataService.latestCartItems.subscribe( (res: any[]) => {
      console.log(res);
      this.cartItemsList = res;
    })
  }

}
