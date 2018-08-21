import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactType } from '@app/contact/models/contact.viewmodel';
import { TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';

@Component({
  selector: 'cm-contact-review-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h6>Contact Review</h6>
  <fieldset>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
        <label class="review" for="contactTypeReview">Contact Type</label>

        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="fullnameReview">Full Name</label>
        </div>
        <div class="form-group">
          <label for="emailAddress">Email Address</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <!--Toggle panels Starts  -->
        <!-- TODO: This will require looping through each saved element for phone and address to insert into the review-->
        <cm-contact-review></cm-contact-review>
        <!--Toggle panels Ends-->
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
export class ContactReviewMainComponent implements TabComponent {

  @Output() formReady = new EventEmitter<FormGroup>()
  contactReviewForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onActivate() {}

  ngOnInit() {

  }

}
