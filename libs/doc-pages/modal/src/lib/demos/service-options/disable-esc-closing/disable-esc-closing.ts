import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from '@period-year-norway/ngx-bootstrap/modal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-modal-service-disable-esc-closing',
  templateUrl: './disable-esc-closing.html'
})
export class DemoModalServiceDisableEscClosingComponent {
  modalRef?: BsModalRef;
  config = {
    keyboard: true
  };
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
