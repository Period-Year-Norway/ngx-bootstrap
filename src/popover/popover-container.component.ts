import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { getBsVer, IBsVersion } from '@period-year-norway/ngx-bootstrap/utils';
import { PlacementForBs5, checkMargins, AvailbleBSPositions } from '@period-year-norway/ngx-bootstrap/positioning';

@Component({
  selector: 'popover-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.id]': 'popoverId',
    '[class]':
      '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + " " + checkMarginNecessity()',
    '[class.show]': '!_bsVersions.isBs3',
    '[class.bs3]': '_bsVersions.isBs3',
    role: 'tooltip',
    style: 'display:block;'
  },
  styles: [
    `
      :host.bs3.popover-top {
        margin-bottom: 10px;
      }
      :host.bs3.popover.top > .arrow {
        margin-left: -2px;
      }
      :host.bs3.popover.top {
        margin-bottom: 10px;
      }
      :host.popover.bottom > .arrow {
        margin-left: -4px;
      }
      :host.bs3.bs-popover-left {
        margin-right: 0.5rem;
      }
      :host.bs3.bs-popover-right .arrow,
      :host.bs3.bs-popover-left .arrow {
        margin: 0.3rem 0;
      }
    `
  ],
  templateUrl: './popover-container.component.html',
  standalone: false
})
export class PopoverContainerComponent {
  @Input() set placement(value: AvailbleBSPositions) {
    if (!this._bsVersions.isBs5) {
      this._placement = value;
    } else {
      this._placement = PlacementForBs5[value as keyof typeof PlacementForBs5];
    }
  }

  @Input() title?: string;

  containerClass?: string;
  popoverId?: string;
  _placement = 'top';

  get _bsVersions(): IBsVersion {
    return getBsVer();
  }

  constructor(config: PopoverConfig) {
    Object.assign(this, config);
  }

  checkMarginNecessity(): string {
    return checkMargins(this._placement);
  }
}
