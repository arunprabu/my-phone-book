import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // component exposed in selector -- used in index.html
  templateUrl: './app.component.html', //html  -- mandatory and only one template should be there 
  styleUrls: ['./app.component.css'] //css  -- optional, many css can also be there
})
export class AppComponent {
  //ts 
  title = 'my-phone-book';
}
