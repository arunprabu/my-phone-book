import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .bold{
      font-weight: bold;
    }`
  ]
})
export class ConceptsComponent implements OnInit {

  //ts   
  myAppName: string = "Phone Book";
  myExp: number = 20;
  skillList: Array<string> = [
    'html', 'css', 'js'
  ];

  myProfile: Object = {
    city: "CHN",
    skills: this.skillList  
  }

  devName: string = "Arun";
  

  constructor() { }

  ngOnInit() {
  }

  getExp(){
    return this.myExp;
  }

  isAuth(){
    return true;
  }

  //for evt binding
  onBtnClickHandler(evt ){
    alert("testing click");
    console.log(evt);
  }

  getMyAge(){
    return 100;
  }

  //for custom event binding
  onMyProfileLoadedHandler(event){
    console.log(event);
  }
}
