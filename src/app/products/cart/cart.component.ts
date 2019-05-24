import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartDataService } from '../../shared/services/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit, OnDestroy {

  cartItemsList: any[];
  cartSubscription: Subscription; 

  constructor( private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.cartSubscription = this.shoppingCartDataService.latestCartItems.subscribe( (res: any[]) => {
      console.log(res);
      this.cartItemsList = res;
    })
  }

  removeCartItem(pdt){
    this.shoppingCartDataService.removePdtFromObservableArray(pdt);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
      //clear the data
      //empty the obj 
      this.cartItemsList.length = 0;
  }
}
