import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from '@period-year-norway/ngx-bootstrap/component-loader';

import { PositioningService } from '@period-year-norway/ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';

import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';

@NgModule({
    imports: [CommonModule],
    declarations: [
        BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownContainerComponent,
        BsDropdownDirective
    ],
    exports: [
        BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownDirective
    ]
})
export class BsDropdownModule {
  static forRoot(): ModuleWithProviders<BsDropdownModule> {
    return {
      ngModule: BsDropdownModule,
      providers: [
        ComponentLoaderFactory,
        PositioningService,
        BsDropdownState
      ]
    };
  }
}
