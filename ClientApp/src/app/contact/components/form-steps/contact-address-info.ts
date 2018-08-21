import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';
import { StateSelectComponent } from '@app/shared/components/state-select/state-select';

@Component({
  selector: 'cm-contact-address-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h6>Contact Address Information</h6>
      <fieldset>
        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <label for="addressDescription1">Address Description</label>
              <input type="text" placeholder="home" class="form-control border-primary" id="addressDescription1" name="addressDesription1">
            </div>
            <div class="form-group">
              <label for="adddress">Address</label>
              <input type="text" class="form-control border-primary" id="address" name="address">
            </div>
            <div class="form-group">
              <label for="address2">Address2</label>
              <input type="text" placeholder="Apt, Suite" name="address" id="address2" class="form-control border-primary" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <div class="row">
                <div class="col-3">
                  <label for="city">City</label>
                  <input type="text" name="city" id="city" class="form-control border-primary" />
                </div>
                <div class="col-2">
                  <label for="state">State</label>
                   <state-select></state-select>
                </div>
                <div class="col-3">
                  <label for="postalCode">Zip Code</label>
                  <input type="text" name="postalCode" id="postalCode" class="form-control border-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <label for="country">Country</label>
              <select class="form-control border-primary" id="country" name="country">
                <option>Country Drop down with Flags</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row col-1">
        <div class="form-group">
          <div class='input-group'>
            <button text="Add Another" class="btn btn-lg btn-outline-primary  btn-sm btn-block" id="addPhone" name="addPhone">+ Another</button>
          </div>
        </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="row float-center">
          <div class="col-md-6">
            <button class="btn btn-lg btn-raised gradient-purple-bliss white">< Previous</button>
            <button type="submit" class="btn btn-lg btn-raised gradient-mint white">Next ></button>
          </div>
        </div>
      </fieldset>
  `,
  styles: [``]
})
export class ContactAddressInfoComponent implements TabComponent {

  @Output() formReady = new EventEmitter<FormGroup>()
  addressInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onActivate() {}

  ngOnInit() {

    this.formReady.emit(this.addressInfoForm);
  }

}
