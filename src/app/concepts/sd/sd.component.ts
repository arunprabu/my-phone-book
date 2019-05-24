import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  submenuList: string[]=  [
    'Electronics',
    'Books',
    'Furnitures'
  ]

  constructor() { }

  ngOnInit() {
  }

  isAuthenticated(){
    return false;
  }
}
