import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from '@period-year-norway/ngx-bootstrap/modal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-accessibility',
  templateUrl: './accessibility.html'
})
export class DemoAccessibilityComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, {
      ariaDescribedby: 'my-modal-description',
      ariaLabelledBy: 'my-modal-title'
    });
  }
}
