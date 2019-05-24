import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent},
  { path: 'contacts', children: [
    { path: '', component: ContactsComponent},
    { path: 'new', component: AddContactComponent, canActivate: [ AuthGuard ] },
    { path: ':id', component: ContactDetailsComponent },
  ]},
  { path: 'faq', redirectTo: '/about' },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Step 3: register the routes 
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class AppRoutingModule { }
