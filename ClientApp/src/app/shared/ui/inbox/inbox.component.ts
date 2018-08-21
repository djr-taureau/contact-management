import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InboxService } from '@app/shared/ui/inbox/inbox.service';
import { Mail, Message } from '@app/shared/ui/inbox/inbox.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [InboxService]
})
export class InboxComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed1 = false;
  public isMessageSelected = true;
  closeResult: string;
  mail: Mail[];
  message: Message;
  constructor(
    private elRef: ElementRef,
    private modalService: NgbModal,
    private inboxService: InboxService
  ) {
    this.mail = this.inboxService.inbox.filter(
      (mail: Mail) => mail.mailType === 'Inbox'
    );
    this.message = this.inboxService.message.filter(
      (message: Message) => message.mailId === 4
    )[0];
  }

  ngOnInit() {
    $.getScript('./assets/js/inbox.js');
  }

  //inbox user list click event function
  DisplayMessage(event, mailId: number) {
    this.message = this.inboxService.message.filter(
      (message: Message) => message.mailId.toString() === mailId.toString()
    )[0];
    this.isMessageSelected = true;

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.querySelectorAll(
      '.users-list-padding > a.list-group-item'
    );
    //do something with selected elements
    [].forEach.call(allAnchors, function(item: HTMLElement) {
      item.setAttribute(
        'class',
        'list-group-item list-group-item-action no-border'
      );
    });
    //set active class for selected item
    event.currentTarget.setAttribute(
      'class',
      'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2'
    );
  }

  //compose popup start
  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //compose popup ends

  //inbox labels click event function
  GetEmailsByLabel(event, labelType: string) {
    this.mail = this.inboxService.inbox.filter(
      (mail: Mail) => mail.labelType === labelType
    );
    this.SetItemActive(event);
  }

  //inbox type click event function
  GetEmailsByType(event, type: string) {
    this.mail = this.inboxService.inbox.filter(
      (mail: Mail) => mail.mailType === type
    );
    this.SetItemActive(event);
  }

  //inbox Starred click event function
  GetStarredEmails(event) {
    this.mail = this.inboxService.inbox.filter(
      (mail: Mail) => mail.isImportant === true
    );
    this.SetItemActive(event);
  }

  SetItemActive(event) {
    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.querySelectorAll(
      '.list-group-messages > a.list-group-item'
    );
    //do something with selected elements
    [].forEach.call(allAnchors, function(item: HTMLElement) {
      item.setAttribute(
        'class',
        'list-group-item list-group-item-action no-border'
      );
    });
    //set active class for selected item
    event.currentTarget.setAttribute(
      'class',
      'list-group-item active no-border'
    );
  }
}
