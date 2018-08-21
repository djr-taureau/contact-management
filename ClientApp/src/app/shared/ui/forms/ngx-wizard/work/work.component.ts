import { Component, OnInit } from '@angular/core';

import { FormDataService } from '@app/shared/ui/forms/ngx-wizard/data/formData.service';
import { WorkflowService } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.service';
import { STEPS } from '@app/shared/ui/forms/ngx-wizard/workflow/workflow.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-wizard-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  title = 'What do you do?';
  workType: string;
  form: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formDataService: FormDataService,
    private workflowService: WorkflowService
  ) {}

  ngOnInit() {
    this.workType = this.formDataService.getWork();
  }
  //Save button event Starts
  save(form: any) {
    if (!form.valid) return;

    this.formDataService.setWork(this.workType);
    let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
    this.router.navigate(['address'], {
      relativeTo: this.route.parent,
      skipLocationChange: true
    });
  }
  //Save button event Ends

  //Cancel button event Starts
  cancel() {
    this.router.navigate(['wizard'], {
      relativeTo: this.route.parent,
      skipLocationChange: true
    });
  }
  //Cancel button event Ends
}
