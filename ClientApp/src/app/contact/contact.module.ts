import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgrxFormModule } from 'ngrx-form';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { PortalModule } from '@angular/cdk/portal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPhoneMaskModule } from 'ngx-phone-mask';
import { FormService } from '@app/contact/services/form.service';
import { ContactRoutingModule } from '@app/contact/contact-routing.module';
import { SelectModule } from 'ng2-select';
/* Feature ui components */

/* Feature Components */
import { ContactTypeComponent } from '@app/contact/components/form-steps/contact-type';
import { ContactAddtionalInfoComponent } from '@app/contact/components/form-steps/contact-additional-info';
import { ContactAddressInfoComponent } from '@app/contact/components/form-steps/contact-address-info';
import { ContactBasicInfoComponent } from '@app/contact/components/form-steps/contact-basic-info';
import { ContactReviewMainComponent } from '@app/contact/components/form-steps/contact-review-main';
import { ContactInfoComponent } from '@app/contact/components/form-steps/contact-info';
import { ContactReviewComponent } from '@app/contact/components/form-steps/contact-review';
/* Feature Containers */
import { ContactFormMainComponent } from '@app/contact/containers/contact-form-main'

/* ngrx */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactEffects } from '@app/contact/effects/contact.effects';
import { reducers } from '@app/contact/reducers';

@NgModule({
  imports: [
    NgrxFormsModule,
    NgrxFormModule,
    SharedModule,
    PortalModule,
    NgbModule,
    NgxPhoneMaskModule,
    RouterModule,
    ContactRoutingModule,
    SelectModule,
    StoreModule.forFeature('contact', reducers),
    EffectsModule.forFeature(
      [ ContactEffects ]
    ),
  ],
  declarations: [
    ContactFormMainComponent,
    ContactTypeComponent,
    ContactAddtionalInfoComponent,
    ContactAddressInfoComponent,
    ContactInfoComponent,
    ContactBasicInfoComponent,
    ContactReviewMainComponent,
    ContactReviewComponent,
  ],
  providers: [FormService],
  bootstrap: [],
  entryComponents: [
    ContactTypeComponent,
    ContactAddtionalInfoComponent,
    ContactAddressInfoComponent,
    ContactInfoComponent,
    ContactBasicInfoComponent,
    ContactReviewMainComponent,
    ContactReviewComponent,
  ]
})
export class ContactModule { }
