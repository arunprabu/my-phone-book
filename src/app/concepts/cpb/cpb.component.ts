import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  //make it a custom property 
  @Input('age') myAge: number = 20; // with alias 'age' -- exposed to app-cpb tag 

  constructor() { }

  ngOnInit() {
  }

}
