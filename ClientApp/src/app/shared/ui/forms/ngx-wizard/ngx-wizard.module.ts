import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGXWizardRoutingModule } from '@app/shared/ui/forms/ngx-wizard/ngx-wizard-routing.module';
import { FormsModule } from '@angular/forms';

/* App Root */
import { NGXFormWizardComponent } from '@app/shared/ui/forms/ngx-wizard/ngx-wizard.component';
import { NavbarComponent } from '@app/shared/ui/forms/ngx-wizard/navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from '@app/shared/ui/forms/ngx-wizard/personal/personal.component';
import { WorkComponent } from '@app/shared/ui/forms/ngx-wizard/work/work.component';
import { AddressComponent } from '@app/shared/ui/forms/ngx-wizard/address/address.component';
import { ResultComponent } from '@app/shared/ui/forms/ngx-wizard/result/result.component';

/* Shared Service */
import { FormDataService } from '@app/shared/ui/forms/ngx-wizard/data/formData.service';
import { WorkflowService } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.service';

@NgModule({
  imports: [CommonModule, FormsModule, NGXWizardRoutingModule],
  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }
  ],
  declarations: [
    NGXFormWizardComponent,
    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent
  ],
  bootstrap: [NGXFormWizardComponent]
})
export class NGXFormWizardModule {}
