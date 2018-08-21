import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
  } from '@angular/forms';
import {
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  OnInit
  } from '@angular/core';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  ViewChild
  } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ContactAddressInfoComponent } from '@app/contact/components/form-steps/contact-address-info';
import { ContactAddtionalInfoComponent } from '@app/contact/components/form-steps/contact-additional-info';
import { ContactBasicInfoComponent } from '@app/contact/components/form-steps/contact-basic-info';
import { ContactFormValue, initialFormState, SetSubmittedValueAction, State as ContactFormState } from '@app/contact/reducers/contact-form.reducer';
import { ContactInfoComponent } from '@app/contact/components/form-steps/contact-info';
import { ContactReviewMainComponent } from '@app/contact/components/form-steps/contact-review-main';
import { ContactTypeComponent } from '@app/contact/components/form-steps/contact-type';
import {
  debounceTime,
  map,
  take,
  tap
  } from 'rxjs/operators';
import { Form } from '@app/contact/models/form.interface';
import { FormGroupState, SetValueAction, ResetAction  } from 'ngrx-forms';
import { FormService } from '@app/contact/services/form.service';
import { FormState, UpdateFormStatus } from 'ngrx-form';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TabComponent, TabInterface } from '@app/contact/components/form-steps/tab-portal.interfaces';
import { TabPortalOutlet } from '@app/contact/components/form-steps/tab-portal-outlet';
const human = require('humanparser');

@Component({
  selector: 'cm-form-main',
  template: `
  <section id="icon-tabs">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Contact Management</h4>
          </div>
          <div class="card-body">
            <div class="card-block">
            <div class="">
            <div class="steps">
            <ul class="tab-list">
            <li class="list-style-circle" *ngFor="let tab of tabs"
                (click)="switchTo(tab.name)"
                [ngClass]="{'-active': isCurrent(tab.name) }" >
              <span class="step" [textContent]="tab.label"></span>
            </li>
            </ul>
            </div>
            </div>
            <form class="icons-tab-steps wizard-circle" #tabContentOutlet
              [formGroup]="myForm" novalidate (submit)="submit()" [ngrxFormState]="(formState$ | async)">
              <!--ComponentOutlet for steps to live in -->

              <!--ComponentOutlet for steps to live in -->
              <fieldset>
              <div class="row justify-content-md-center">
              <div class="col-6 text-center">
                <button disabled class="mr-2 ml-2 pl-2 pr-2 btn btn-lg btn-raised gradient-purple-bliss white">< Previous</button>
                <button type="submit" class="mr-2 ml-2 pl-2 pr-2 btn btn-lg btn-raised gradient-mint white">Next ></button>
                <button type="reset"
                [disabled]="(formState$ | async).isPristine && (formState$ | async).isUntouched && (formState$ | async).isUnsubmitted" (click)="reset()">Reset</button>
              </div>
            </div>

            </fieldset>
              </form>
                <!-- Circles which indicates the steps of the form: -->
                <div style="text-align:center;margin-top:40px;">
                <span class="step-bottom"></span>
                <span class="step-bottm"></span>
                <span class="step-bottom"></span>
                <span class="step-bottom"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- Wizard Ends -->

  `,
  styleUrls: ['./tab-view.css']
})
export class ContactFormMainComponent
  implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  private tabPortalHost: TabPortalOutlet;

  @ViewChild('tabContentOutlet')
  tabContentOutlet: ElementRef;

  // Define the form step tabs
  readonly tabs = [
    {
      name: 'type',
      label: 'Contact Type',
      componentClass: ContactTypeComponent
    },
    {
      name: 'basic',
      label: 'Contact Basic Info',
      componentClass: ContactBasicInfoComponent
    },
    {
      name: 'info',
      label: 'Contact Info',
      componentClass: ContactInfoComponent
    },
    {
      name: 'address',
      label: 'Contact Address',
      componentClass: ContactAddressInfoComponent
    },
    {
      name: 'additional',
      label: 'Contact Additional Info',
      componentClass: ContactAddtionalInfoComponent
    },
    {
      name: 'review',
      label: 'Contact Review',
      componentClass: ContactReviewMainComponent
    }
  ];
  myForm: FormGroup;
  formState$: Observable<FormGroupState<ContactFormValue>>;
  submittedValue$: Observable<ContactFormValue | undefined>
  formStatus$: Observable<any>;
  formStatus = new BehaviorSubject<any>(null);
  test;

  constructor(
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly injector: Injector,
    readonly appRef: ApplicationRef,
    private fb: FormBuilder,
    private store: Store<ContactFormState>
  ) {
    this.formState$ = store.pipe(select(s => s.myForm.formState));
    this.submittedValue$ = store.pipe(select(s => s.myForm.submittedValue));
  }

  ngOnInit() {

    // jquery for form steps
    $.getScript('./assets/js/jquery.steps.min.js');
    $.getScript('./assets/js/wizard-steps.js');
    // get form steps components
    this.tabPortalHost = new TabPortalOutlet(
      this.tabs,
      this.tabContentOutlet.nativeElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );


    this.switchTo('type');
    this.formState$ = this.store.pipe(select(s => s.myForm.formState));
    this.submittedValue$ = this.store.pipe(select(s => s.myForm.submittedValue));
  }

  ngAfterViewInit() {
    $.getScript('./assets/js/jquery.steps.min.js');
    $.getScript('./assets/js/wizard-steps.js');
    this.formState$ = this.store.pipe(select(s => s.myForm.formState));
  }


  ngAfterContentInit() {

    this.formState$ = this.store.pipe(select(s => s.myForm.formState));
    this.submittedValue$ = this.store.pipe(select(s => s.myForm.submittedValue));
  }

  ngOnDestroy() {
    this.tabPortalHost.dispose();
  }

  public isCurrent(name: string) {
    const current = this.tabPortalHost.currentTab;
    return current && current.name === name;
  }


  public switchTo(name: string) {
    this.tabPortalHost.switchTo(name);
    return false;
  }

  nameSplitter(fullName: string) {
    const attrs = human.parseName(fullName);
    console.log(attrs);
  }

  reset() {
    this.store.dispatch(new SetValueAction(initialFormState.id, initialFormState.value));
    this.store.dispatch(new ResetAction(initialFormState.id));
  }

  submit() {
    this.formState$.pipe(
      take(1),
      map(fs => new SetSubmittedValueAction(fs.value)),
    ).subscribe(this.store);
  }
}
