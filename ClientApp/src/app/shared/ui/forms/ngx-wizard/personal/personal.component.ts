import { Component, OnInit } from '@angular/core';

import { Personal } from '@app/shared/ui/forms/ngx-wizard/data/formData.model';
import { FormDataService } from '@app/shared/ui/forms/ngx-wizard/data/formData.service';
import { WorkflowService } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.service';
import { STEPS } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-wizard-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formDataService: FormDataService,
    private workflowService: WorkflowService
  ) {}

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
  }

  //Save button event Starts
  save(form: any) {
    if (!form.valid) return;

    this.formDataService.setPersonal(this.personal);

    let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
    if (firstState.length > 0) {
    }
    this.router.navigateByUrl('/forms/ngx/work', {
      relativeTo: this.route.parent,
      skipLocationChange: true
    });
  }
  //Save button event Ends
}
