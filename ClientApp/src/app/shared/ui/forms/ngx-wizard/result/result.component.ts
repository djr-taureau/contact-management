import { Component, OnInit, Input } from '@angular/core';

import { FormData } from '@app/shared/ui/forms/ngx-wizard/data/formData.model';
import { FormDataService } from '@app/shared/ui/forms/ngx-wizard/data/formData.service';

@Component({
  selector: 'mt-wizard-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  title = 'Thank You!';
  @Input() formData: FormData;
  isFormValid: boolean = false;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
  }

  //Submit button event Starts
  submit() {
    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }
  //Submit button event Ends
}
