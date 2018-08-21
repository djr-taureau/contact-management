import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ContactFormValue, State as ContactFormState } from '@app/contact/reducers/contact-form.reducer';
import { FormState, UpdateFormStatus } from 'ngrx-form';
import { FormGroupState } from 'ngrx-forms';
@Component({
  selector: 'cm-contact-type',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h6 class="Semibold 74rem">Contact Type</h6>
  <fieldset>
    <div class="row">
      <div class="col-12">
          <div class="form-group">
            <label for="contactType"></label>
            <form [formGroup]="checkboxGroupForm">
            <div class="btn-group btn-group-toggle text-center">
                <label class="col-3 btn-outline btn-raised btn-primary ml-3 mr-3" ngbButtonLabel>
                <div class=""><i class="fa fa-user fa-lg"></i></div>
                    <input class="ml-3 mr-3" type="checkbox" formControlName="client" ngbButton>
                </label>

                <label class="col-3 btn-outline btn-raised btn-primary ml-3 mr-3" ngbButtonLabel>
                <div class=""><i class="fa fa-user fa-lg"></i></div>
                <input class="ml-3 mr-3" type="checkbox" formControlName="lawyer" ngbButton>
              </label>

              <label class="col-3 btn-outline btn-raised btn-primary ml-3 mr-3" ngbButtonLabel>
              <div class=""><i class="fa fa-building fa-lg"></i></div>
                  <input class="ml-3 mr-3" type="checkbox" formControlName="company" ngbButton>
              </label>

                <label class="col-3 btn-outline btn-raised btn-primary ml-3 mr-3" ngbButtonLabel>
                <div class=""><i class="fa fa-user fa-lg"></i></div>
                    <input class="ml-3 mr-3" type="checkbox" formControlName="opposingCounsel" ngbButton>
                </label>

            </div>
          </form>
          </div>
        </div>
      </div>
  </fieldset>
  <fieldset>
    <div class="row float-center">
      <div class="col-md-6 text-center">
        <button disabled class="mr-2 ml-2 pl-2 pr-2 btn btn-lg btn-raised gradient-purple-bliss white">< Previous</button>
        <button disabled  type="submit" class="mr-2 ml-2 pl-2 pr-2 btn btn-lg btn-raised gradient-mint white">Next ></button>
      </div>
    </div>
  </fieldset>
  `,
  styles: [` `]
})
export class ContactTypeComponent implements TabComponent {

  myForm: FormGroup;
  formState$: Observable<FormGroupState<ContactFormValue>>;

  constructor(private fb: FormBuilder, private store: Store<ContactFormState>) {
  }

  onActivate() {
    this.myForm = this.fb.group({
      contactType: [''],
    })
  }
}




