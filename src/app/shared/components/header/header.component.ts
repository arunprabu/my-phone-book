import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from '../../services/shopping-cart-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemsList: any[];
  constructor( private shoppingCartDataService: ShoppingCartDataService, private router: Router) { }

  ngOnInit() {
    //Step3: Subscribe the observable 
    this.shoppingCartDataService.latestCartItems.subscribe( (res: any[] )=>{
      console.log(res );
      this.cartItemsList = res;
    })
  }  

  gotoCartPage(){
    this.router.navigate(['products', 'cart']);
  }

}
