import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from '@period-year-norway/ngx-bootstrap/component-loader';
import { PositioningService } from '@period-year-norway/ngx-bootstrap/positioning';

@NgModule({
    imports: [CommonModule],
    declarations: [TypeaheadContainerComponent, TypeaheadDirective],
    exports: [TypeaheadContainerComponent, TypeaheadDirective]
})
export class TypeaheadModule {
  static forRoot(): ModuleWithProviders<TypeaheadModule> {
    return {
      ngModule: TypeaheadModule,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  }
}
