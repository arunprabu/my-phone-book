import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

import { IContact } from 'src/app/shared/models/contact';
 
declare var $:any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: IContact; 
  duplicateContactData: IContact;
  isSaved: boolean = false;
  constructor( private contactService: ContactService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //read url parameter in angular 
    let _contactId = this.activatedRoute.snapshot.paramMap.get('id');
    this.contactService.getContactById(_contactId)
            .subscribe( (res: IContact ) => {
              console.log(res);
              this.contactData = res;
            });
  }

  openEditModal(){
    //duplicate object 
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
    console.log(this.duplicateContactData);
    //launching modal using JS 
    $('#editContactModal').modal('show');
  }

  onUpdateContactHandler( ){
    console.log(this.duplicateContactData);
    //
    this.contactService.updateContact(this.duplicateContactData)
        .subscribe( (res: IContact) => {
          console.log(res);
          if(res && res.id){
            this.isSaved = true;
            setTimeout( () => {
              $('#editContactModal').modal('hide');
            }, 4000);
          }
        });

  }

}
