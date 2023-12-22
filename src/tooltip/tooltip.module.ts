import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { ComponentLoaderFactory } from '@period-year-norway/ngx-bootstrap/component-loader';
import { PositioningService } from '@period-year-norway/ngx-bootstrap/positioning';

@NgModule({
    imports: [CommonModule],
    declarations: [TooltipDirective, TooltipContainerComponent],
    exports: [TooltipDirective]
})
export class TooltipModule {
  static forRoot(): ModuleWithProviders<TooltipModule> {
    return {
      ngModule: TooltipModule,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  }
}
