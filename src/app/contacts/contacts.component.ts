import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy  {

  contactList: Contact[] ; 
  errorMsg: string;
  contactListSubscription: Subscription; 
  constructor( private contactService: ContactService) { 
    console.log("Inside constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //1. send a req to service
    this.contactListSubscription = this.contactService.getContacts()
                                      .subscribe( (res: Contact[]) => { //2. get the res from service
                                        console.log(res);
                                        //display it in html 
                                        this.contactList = res;
                                      }),
                                      err => { 
                                        console.log('HTTP Error', err);
                                        this.errorMsg = err;
                                      },
                                      () => console.log('HTTP request completed.');
  }

  ngOnDestroy(){
    console.log("Inside ngOnDestroy");

    //delete the data 
    //unsubscribe 
    this.contactListSubscription.unsubscribe();
  }

}
