import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-wizard-forms',
    templateUrl: './wizard-forms.component.html',
    styleUrls: ['./wizard-forms.component.scss']
})

export class WizardFormsComponent implements OnInit {

    ngOnInit() {
        $.getScript('./assets/js/jquery.steps.min.js');
        $.getScript('./assets/js/wizard-steps.js');
    }

}
