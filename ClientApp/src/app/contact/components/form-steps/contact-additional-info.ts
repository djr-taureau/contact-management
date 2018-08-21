import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';

@Component({
  selector: 'cm-contact-additional-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h6>Contact Additional Information</h6>
  <fieldset>
  <div class="row">
    <div class="col-md-8">
      <div class="form-group">

      <form class="form-inline">
              <div class="form-group">
                <div class="input-group">
                  <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="popupModel" ngbDatepicker #d2="ngbDatepicker">
                  <div class="input-group-append">
                    <div class="input-group-text" (click)="d2.toggle()">
                      <i class="fa fa-calendar" style="cursor: pointer;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </form>

        </div>
      <div class="form-group">
        <label for="adddress">Job Title</label>
        <input type="text" class="form-control border-primary" id="jobtile" name="jobtitle">
      </div>
      <div class="form-group">
        <label for="address2">Company</label>
        <input type="text" placeholder="" name="commpany" id="company" class="form-control border-primary" />
      </div>
      <div class="form-group">
        <label for="notes">Notes</label>
        <textarea type="text" placeholder="" name="notes" id="notes" class="form-control border-primary"></textarea>
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
export class ContactAddtionalInfoComponent implements TabComponent {

  @Output() formReady = new EventEmitter<FormGroup>()
  additionalInfoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onActivate() {}

  ngOnInit() {

    this.formReady.emit(this.additionalInfoForm);
  }

}
