import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from '@period-year-norway/ngx-bootstrap/modal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-modal-with-popups',
  templateUrl: './modal-with-popups.html'
})
export class DemoModalWithPopupsComponent {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
