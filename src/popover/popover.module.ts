import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLoaderFactory } from '@period-year-norway/ngx-bootstrap/component-loader';
import { PositioningService } from '@period-year-norway/ngx-bootstrap/positioning';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PopoverDirective, PopoverContainerComponent],
    exports: [PopoverDirective]
})
export class PopoverModule {
  static forRoot(): ModuleWithProviders<PopoverModule> {
    return {
      ngModule: PopoverModule,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  }
}
