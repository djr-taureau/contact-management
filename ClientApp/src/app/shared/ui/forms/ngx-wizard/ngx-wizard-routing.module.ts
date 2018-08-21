import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGXFormWizardComponent } from '@app/shared/ui/forms/ngx-wizard/ngx-wizard.component';
import { PersonalComponent } from '@app/shared/ui/forms/ngx-wizard/personal/personal.component';
import { WorkComponent } from '@app/shared/ui/forms/ngx-wizard/work/work.component';
import { AddressComponent } from '@app/shared/ui/forms/ngx-wizard/address/address.component';
import { ResultComponent } from '@app/shared/ui/forms/ngx-wizard/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: NGXFormWizardComponent,
    data: {
      title: 'ngx-wizard'
    },
    children: [
      {
        path: 'wizard',
        component: PersonalComponent,
        data: {
          title: 'Personal'
        }
      },
      {
        path: 'work',
        component: WorkComponent,
        data: {
          title: 'Work'
        }
      },
      {
        path: 'address',
        component: AddressComponent,
        data: {
          title: 'Address'
        }
      },
      {
        path: 'result',
        component: ResultComponent,
        data: {
          title: 'Result'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGXWizardRoutingModule { }

export const routedComponents = [NGXFormWizardComponent];
