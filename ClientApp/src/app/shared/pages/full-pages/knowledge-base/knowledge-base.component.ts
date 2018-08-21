import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent {
  title: string;
  constructor(private modalService: NgbModal) {}

  GetDetails(content, titleText) {
    this.title = titleText;
    this.modalService
      .open(content, { size: 'lg' })
      .result.then(result => {}, reason => {});
  }
}
