import { Component } from '@angular/core';
import { NGXToastrService } from '@app/shared/ui/components/extra/toastr/toastr.service';
@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  providers: [NGXToastrService]
})
export class ToastrComponent {
  constructor(private service: NGXToastrService) {}

  // Success Type
  typeSuccess() {
    this.service.typeSuccess();
  }

  // Success Type
  typeInfo() {
    this.service.typeInfo();
  }

  // Success Type
  typeWarning() {
    this.service.typeWarning();
  }

  // Success Type
  typeError() {
    this.service.typeError();
  }

  // Custom Type
  typeCustom() {
    this.service.typeCustom();
  }

  // Remove current toasts using animation
  clearToast() {
    this.service.clearToast();
  }

  // Show close button
  showCloseButton() {
    this.service.showCloseButton();
  }

  //progressBar
  progressBar() {
    this.service.progressBar();
  }

  //Dismiss toastr on click
  dismissToastOnClick() {
    this.service.dismissToastOnClick();
  }

  // Timeout
  timeout() {
    this.service.timeout();
  }

  // Enable HTML
  enableHtml() {
    this.service.enableHtml();
  }

  // Title Class
  titleClass() {
    this.service.titleClass();
  }
  // Message Class
  messageClass() {
    this.service.messageClass();
  }
}
