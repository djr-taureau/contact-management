import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhoneType } from '@app/contact/models/contact.viewmodel';
import { TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';

@Component({
  selector: 'cm-contact-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h6>Contact Information</h6>
  <fieldset>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" ngxPhoneMask class="form-control border-primary" id="phone" valueType="clean" formControlName="phone" />
          </div>
          <div class="form-group">
            <label for="phoneType"></label>
              <div class="btn-group btn-group-toggle btn-group-raised btn-group-justified" ngbRadioGroup name="phoneTypeForm" formControlName="phoneTypeForm">
                <label ngbButtonLabel class="btn btn-round btn-primary btn-lg">
                  <input ngbButton type="radio" value="Cel">Cel
                </label>
                <label ngbButtonLabel class="btn btn-round btn-primary btn-lg">
                  <input ngbButton type="radio" value="Home"> Home
                </label>
                <label ngbButtonLabel class="btn btn-round btn-primary btn-lg">
                  <input ngbButton type="radio" value="Office">Office
                </label>
              </div>
            <div class="row col-1">
            <div class="form-group">
              <div class='input-group'>
                <button disabled text="Add Another" class="btn btn-lg btn-outline-primary  btn-sm btn-block" id="addPhone" name="addPhone"><i class="fas fa-plus fa-2x"></i></button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </fieldset>
      <fieldset>
      <div class="row justify-content-md-center">
      <div class="col-6 text-center">
        <button disabled class="mr-2 ml-2 pl-2 pr-2 btn btn-lg btn-raised gradient-purple-bliss white">< Previous</button>
        <button disabled  type="submit" class="mr-2 ml-2 pl-2 pr-2 btn btn-lg btn-raised gradient-mint white">Next ></button>
      </div>
    </div>
    </fieldset>
  `,
  styles: [``]
})
export class ContactInfoComponent implements TabComponent {

  @Output() formReady = new EventEmitter<FormGroup>()
  contactInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.formReady.emit(this.contactInfoForm);
  }

  onActivate(){}

}
