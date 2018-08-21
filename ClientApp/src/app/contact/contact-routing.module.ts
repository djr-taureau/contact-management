import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactFormMainComponent} from '@app/contact/containers/contact-form-main';


import { StateSelectComponent } from '@app/shared/components/state-select/state-select';

const contactRoutes: Routes = [
  {
    path: '',
    component:  ContactFormMainComponent,
    data: {
      title: 'Contact Management'
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactRoutingModule { }


