import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'bs-current-date',
    template: `<div class="current-timedate"><span>{{ title }}</span></div>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BsCurrentDateViewComponent {
  @Input() title?: string;
}
