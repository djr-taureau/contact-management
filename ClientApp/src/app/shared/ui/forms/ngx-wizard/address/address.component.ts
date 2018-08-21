import { Component, OnInit } from '@angular/core';

import { Address } from '@app/shared/ui/forms/ngx-wizard/data/formData.model';
import { FormDataService } from '@app/shared/ui/forms/ngx-wizard/data/formData.service';
import { WorkflowService } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.service';
import { STEPS } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-wizard-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  title = 'Where do you live?';
  address: Address;
  form: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formDataService: FormDataService,
    private workflowService: WorkflowService
  ) {}

  ngOnInit() {
    this.address = this.formDataService.getAddress();
  }
  //Save button event Starts
  save(form: any) {
    if (!form.valid) return;

    this.formDataService.setAddress(this.address);
    let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
    this.router.navigate(['result'], {
      relativeTo: this.route.parent,
      skipLocationChange: true
    });
  }
  //Save button event Ends

  //Cancel button event Starts
  cancel() {
    this.router.navigate(['work'], {
      relativeTo: this.route.parent,
      skipLocationChange: true
    });
  }
  //Cancel button event Ends
}
