import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ApxFormsRoutingModule } from '@app/shared/ui/forms/apx-forms-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NGXFormWizardModule } from '@app/shared/ui/forms/ngx-wizard/ngx-wizard.module';
import { CustomFormsModule } from 'ng2-validation';
import { MatchHeightModule } from '@app/shared/directives/match-height.directive';

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

@NgModule({
  imports: [
    SharedModule,
    ApxFormsRoutingModule,
    NGXFormWizardModule,
    CustomFormsModule,
    MatchHeightModule,
    NgbModule
  ],
  declarations: [
    ValidationFormsComponent,
    WizardFormsComponent,
    BasicComponent,
    HorizontalComponent,
    HiddenLabelsComponent,
    FormActionsComponent,
    BorderedComponent,
    StripedRowsComponent,
    InputsComponent,
    InputGroupsComponent,
    InputGridComponent
  ]
})
export class ApxFormsModule {}
