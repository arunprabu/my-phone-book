import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

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
export class ConceptsComponent implements OnInit, AfterViewInit {

  //ts   
  myAppName: string = "Phone Book";
  myExp: number = 20;
  skillList: Array<string> = [
    'html', 'css', 'js'
  ];

  devName: string = "Arun";
  
  //for custom event binding
  msgReceived: string;


  // accessing child component data from parent using @ViewChild()
  @ViewChild(CebComponent) cebData;

  constructor() {
    console.log(this.cebData);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    console.log(this.cebData);
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
    this.msgReceived = event;
  }
}
