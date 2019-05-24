import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  isSaved: boolean = false; 

  constructor( private contactService: ContactService) { // connect to the service

  }

  ngOnInit() {
    this.contactForm = new FormGroup( { 
      // we'll create new form controls 
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('',  [  
        Validators.required,
        Validators.email
      ])
    });
  }

  onAddContactHandler(): void{
    console.log(this.contactForm);
    console.log(this.contactForm.value); //0. get the form data in ts 
     
    //1. send the data to service 
    this.contactService.createContact(this.contactForm.value)
              .subscribe( (res :any ) => { //2. get the response from service
                console.log(res);
                //3. display the resp in html
                if(res && res.id ){
                  this.isSaved = true;
                }
              });
    
     
  }

}
