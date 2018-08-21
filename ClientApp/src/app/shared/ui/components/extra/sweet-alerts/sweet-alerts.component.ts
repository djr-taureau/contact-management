import { Component } from '@angular/core';
import * as alertFunctions from '@app/core/data/sweet-alerts';


@Component({
    selector: 'app-sweet-alerts',
    templateUrl: './sweet-alerts.component.html',
    styleUrls: ['./sweet-alerts.component.scss']
})

export class SweetAlertsComponent  {

    // Simple Alert
    basicAlert(){
      alertFunctions.basicAlert();
    }
    // Alert with Title
    withTitle(){
      alertFunctions.withTitle();
    }
    //  HTML Alert
    htmlAlert(){
      alertFunctions.htmlAlert();
    }
    // Question Type Alert
    typeQuestion(){
      alertFunctions.typeQuestion();
    }
    // Success Type Alert
    typeSuccess(){
      alertFunctions.typeSuccess();
    }
    // Info Type Alert
    typeInfo(){
      alertFunctions.typeInfo();
    }
    // Warning Type Alert
    typeWarning(){
      alertFunctions.typeWarning();
    }
    // Error Type Alert
    typeError(){
      alertFunctions.typeError();
    }
    // Custom Icon
    customIcon(){
      alertFunctions.customIcon();
    }
    // Auto close timer
    autoClose(){
      alertFunctions.autoClose();
    }
    // Allow Outside Click
    outsideClick(){
      alertFunctions.outsideClick();
    }
    // Ajax Request
    ajaxRequest(){
      alertFunctions.ajaxRequest();
    }
    // Button Options
    customButton(){
      alertFunctions.customButton();
    }
    // Prompt Function
    promptFunction(){
      alertFunctions.promptFunction();
    }
    // Confirm Button Action
    confirmText(){
      alertFunctions.confirmText();
    }
    // Confirm & Cancel Button
    confirmCancelButton(){
      alertFunctions.confirmCancelButton();
    }
    // Chaining modals / Steps
    steps(){
      alertFunctions.steps();
    }
}
