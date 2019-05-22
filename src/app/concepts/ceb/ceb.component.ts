import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //Step1: create an event using eventemitter
  //Step2: specify the type of data we are sending to parent -- string 
  //Step3: Make this as custom Event.
  @Output() myProfileLoaded = new EventEmitter<string>();  


  //for ViewChild demo 
  skillsList: string[] = [ 'html', 'css', 'nodejs' ];

  constructor() { }

  ngOnInit() {
  }

  onGenReport(){
    //ajax calls will go 
    // upon you receive the data , emit the event 
    //mocking the above with a timeout here
    setTimeout( () => {
      //Step4: Send the data to parent by emitting event 
      this.myProfileLoaded.emit("Arun");
      //Refer concepts.component.html for step 5 
    }, 5000);
    
  }

}
