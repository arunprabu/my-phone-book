import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Contact } from '../shared/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient) { }

  createContact( contactData: Contact): Observable<Contact> { //1. receive data from comp.ts 
    //2. send the data to rest api 
    //2.1 identify the rest api -- https://jsonplaceholder.typicode.com/users
    //2.2. send it using POST method 
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)
            .pipe(map( ( res: Contact ) => { //3. get the resp from rest api 
              console.log(res);
              //4. send it back to component 
              return res;
            }));
  }

  //perfect code 
  getContacts( ): Observable<Contact[]> {
    //2. send the req to rest api 
    //2.1 identify the rest api -- https://jsonplaceholder.typicode.com/users
    //2.2. send it using GET method 
    return this.http.get("https://jsonplaceholder.typicode.com/users" )
            .pipe(map( ( res: Contact[] ) => { //3. get the resp from rest api 
              console.log(res);
              //4. send it back to component 
              return res;
            }),
            catchError(err => {  //catch error
              console.log('caught with an error', err);
              return throwError(err); //throw error
            }))
            
            
  }

  getContactById( contactId: string): Observable<Contact> {
    console.log(contactId);
    let _apiUrl = `https://jsonplaceholder.typicode.com/users/${contactId}`;
    return this.http.get(_apiUrl)
          .pipe(map( ( res: Contact ) => { //3. get the resp from rest api 
            console.log(res);
            //4. send it back to component 
            return res;
          }));
  }

  updateContact(contactData: Contact): Observable<Contact> {
    console.log(contactData);
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${contactData.id}`, contactData)
          .pipe(map( ( res: Contact ) => { //3. get the resp from rest api 
            console.log(res);
            //4. send it back to component 
            return res;
          }));
  }
}
