import {
  Component,
  ViewChild,
  ElementRef,
  TemplateRef,
  AfterViewInit,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewEncapsulation,
  AfterContentChecked
} from '@angular/core';
import {
  NgbAccordion,
  NgbPanel,
  NgbAccordionConfig,
  NgbPanelChangeEvent
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cm-contact-review',
  templateUrl: './contact-review/contact-review.html',
  providers: [NgbAccordionConfig]
  // encapsulation: ViewEncapsulation.Emulated
})
export class ContactReviewComponent {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }



}
