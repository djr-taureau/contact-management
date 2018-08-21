import { Component, ChangeDetectionStrategy} from '@angular/core';
import { TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ContactFormValue, State as ContactFormState } from '@app/contact/reducers/contact-form.reducer';
import { FormGroupState } from 'ngrx-forms';
import { FormState, UpdateFormStatus } from 'ngrx-form'

@Component({
  selector: 'cm-contact-basic-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h6 class="Semibold 74rem">Contact Basic Information</h6>
  <fieldset>
      <div class="row justify-content-md-center">
      <div class="col-md-6 .ml-md-auto">
        <div class="form-group field">
        <div class="field" [class.error]="!myForm.get('fullName').valid && myForm.get('fullName').touched">
          <label for="fullname">Full Name</label>
          <input type="text"
          [ngrxFormControlState]="(formState$ | async).controls.fullName"
            class="form-control border-primary" id="fullName" name="fullName">
        </div>
        </div>
        <div class="input-group field">
        <div class="field" [class.error]="!myForm.get('email').valid && myForm.get('email').touched">
          <label for="email">Email Address</label>
          <input type="email"
          [ngrxFormControlState]="(formState$ | async).controls.email"
            class="form-control border-primary" id="email" name="email" ngModel [email]="true">
        </div>
        </div>
      </div>
    </div>
    </fieldset>



      `,
  styles: [``]
})
export class ContactBasicInfoComponent implements TabComponent {

  myForm: FormGroup;
  formState$: Observable<FormGroupState<ContactFormValue>>;
  submittedValue$: Observable<ContactFormValue | undefined>
  constructor(private fb: FormBuilder, private store: Store<ContactFormState>) {
  }

  onActivate() {
    this.myForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required]
    })

    this.formState$ = this.store.pipe(select(s => s.myForm.formState));
    this.submittedValue$ = this.store.pipe(select(s => s.myForm.submittedValue));

  }

}
