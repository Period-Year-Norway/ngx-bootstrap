import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule } from '@period-year-norway/ngx-bootstrap/tooltip';

import { DocsModule } from '@ngx-bootstrap-doc/docs';
import { TooltipSectionComponent } from './tooltip-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-tooltip.routes';
/*exports*/
export { TooltipSectionComponent } from './tooltip-section.component';

@NgModule({
    declarations: [
        TooltipSectionComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        DocsModule,
        TooltipModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    exports: [TooltipSectionComponent]
})
export class DemoTooltipModule {}
