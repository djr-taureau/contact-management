// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class NGXToastrService {
    constructor(public toastr: ToastrService) { }

    // Success Type
    typeSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }

    // Success Type
    typeInfo() {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    }

    // Success Type
    typeWarning() {
        this.toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    }

    // Success Type
    typeError() {
        this.toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    }

    // Custom Type
    typeCustom() {
        this.toastr.success('<span style="color: red">Message in red.</span>', null, { enableHtml: true });
    }

    //Progress bar
    progressBar() {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { "progressBar": true });
    }

    // Timeout
    timeout() {
        this.toastr.error('I do not think that word means what you think it means.', 'Timeout!', { "timeOut": 2000 });
    }

   
    //Dismiss toastr on Click
    dismissToastOnClick() {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { "tapToDismiss": true });
    }
    // Remove current toasts using animation
    clearToast() {
        this.toastr.clear()
    }

    // Show close button
    showCloseButton() {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { closeButton: true });
    }
    // Enable  HTML
    enableHtml() {
        this.toastr.info('<i>Have fun <b>storming</b> the castle!</i>', 'Miracle Max Says', { enableHtml: true });
    }
    // Title Class
    titleClass() {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    }
    // Message Class
    messageClass() {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    }

}