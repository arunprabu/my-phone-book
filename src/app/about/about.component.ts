import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  loremIpsum: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sit magnam et, in fuga dolorem ab, praesentium dolorum nesciunt sed molestiae? Modi, illum molestias. Est ea libero laudantium maiores amet.";

  birthday = new Date(1988, 3, 15); // April 15, 1988


  constructor() { }

  ngOnInit() {
  }

}
