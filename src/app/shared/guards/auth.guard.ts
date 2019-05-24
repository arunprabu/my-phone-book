import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //dep inj auth service 
  constructor(){

  }

  canActivate() {
    //connect to auth service 
    //session exist or not
    //based on that return true/ false 
    /*if(true) {
      return true;
    }else{
      //redirect the user to login page 
      //return false;
    }
    */
    return false;
  } 
}
