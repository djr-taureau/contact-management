import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationFormsComponent } from '@app/shared/ui/forms/validation/validation-forms.component';
import { WizardFormsComponent } from '@app/shared/ui/forms/wizard/wizard-forms.component';
import { BasicComponent } from '@app/shared/ui/forms/layouts/basic/basic.component';
import { HorizontalComponent } from '@app/shared/ui/forms/layouts/horizontal/horizontal.component';
import { HiddenLabelsComponent } from '@app/shared/ui/forms/layouts/hidden-labels/hidden-labels.component';
import { FormActionsComponent } from '@app/shared/ui/forms/layouts/form-actions/form-actions.component';
import { BorderedComponent } from '@app/shared/ui/forms/layouts/bordered/bordered.component';
import { StripedRowsComponent } from '@app/shared/ui/forms/layouts/striped-rows/striped-rows.component';
import { InputsComponent } from '@app/shared/ui/forms/elements/inputs/inputs.component';
import { InputGroupsComponent } from '@app/shared/ui/forms/elements/input-groups/input-groups.component';
import { InputGridComponent } from '@app/shared/ui/forms/elements/input-grid/input-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          title: 'Basic Forms'
        }
      },
      {
        path: 'horizontal',
        component: HorizontalComponent,
        data: {
          title: 'Horizontal Forms'
        }
      },
      {
        path: 'hidden-labels',
        component: HiddenLabelsComponent,
        data: {
          title: 'Hidden Labels'
        }
      },
      {
        path: 'form-actions',
        component: FormActionsComponent,
        data: {
          title: 'Form Actions'
        }
      },
      {
        path: 'bordered',
        component: BorderedComponent,
        data: {
          title: 'Bordered Forms'
        }
      },
      {
        path: 'striped-rows',
        component: StripedRowsComponent,
        data: {
          title: 'Striped Rows'
        }
      },
      {
        path: 'inputs',
        component: InputsComponent,
        data: {
          title: 'Inputs'
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: 'Input Groups'
        }
      },
      {
        path: 'input-grid',
        component: InputGridComponent,
        data: {
          title: 'Input Grid'
        }
      },
      {
        path: 'validation',
        component: ValidationFormsComponent,
        data: {
          title: 'Validation Forms'
        }
      },
      {
        path: 'wizard',
        component: WizardFormsComponent,
        data: {
          title: 'Wizard Forms'
        }
      },
      {
        path: 'ngx',
        loadChildren: './ngx-wizard/ngx-wizard.module#NGXFormWizardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApxFormsRoutingModule {}
