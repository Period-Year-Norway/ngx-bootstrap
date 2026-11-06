// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoBasicComponent } from './demos/basic/basic.component';
import { ComplexDatamodelDemoComponent } from './demos/complex-datamodel/complex-datamodel.component';
import { CustomItemTemplateDemoComponent } from './demos/custom-item-template/custom-item-template';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import { NgApiDocComponent } from '@ngx-bootstrap-doc/docs';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';

import * as rawDemosBasicBasicComponentTs from './demos/basic/basic.component.ts?raw' with { loader: 'text' };
import * as rawDemosBasicBasicComponentHtml from './demos/basic/basic.component.html?raw' with { loader: 'text' };
import * as rawDemosComplexDatamodelComplexDatamodelComponentTs from './demos/complex-datamodel/complex-datamodel.component.ts?raw' with { loader: 'text' };
import * as rawDemosComplexDatamodelComplexDatamodelComponentHtml from './demos/complex-datamodel/complex-datamodel.component.html?raw' with { loader: 'text' };
import * as rawDemosCustomItemTemplateCustomItemTemplateTs from './demos/custom-item-template/custom-item-template.ts?raw' with { loader: 'text' };
import * as rawDemosCustomItemTemplateCustomItemTemplateHtml from './demos/custom-item-template/custom-item-template.html?raw' with { loader: 'text' };
import * as rawDocsUsageMd from './docs/usage.md?raw' with { loader: 'text' };

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Overview',
    anchor: 'overview',
    tabName: 'overview',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: rawDemosBasicBasicComponentTs,
        html: rawDemosBasicBasicComponentHtml,
        outlet: DemoBasicComponent
      },
      {
        title: 'Complex data model',
        anchor: 'complexDatamodel',
        component: rawDemosComplexDatamodelComplexDatamodelComponentTs,
        html: rawDemosComplexDatamodelComplexDatamodelComponentHtml,
        outlet: ComplexDatamodelDemoComponent
      },
      {
        title: 'Custom item template',
        anchor: 'itemTemplate',
        component: rawDemosCustomItemTemplateCustomItemTemplateTs,
        html: rawDemosCustomItemTemplateCustomItemTemplateHtml,
        outlet: CustomItemTemplateDemoComponent
      },
      {
        title: 'Accessibility',
        anchor: 'accessibility',
        outlet: DemoAccessibilityComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">sortable</span>',
    content: [
      {
        title: 'SortableComponent',
        anchor: 'sortable-component',
        outlet: NgApiDocComponent
      }
    ]
  },
  {
    name: 'Examples',
    anchor: 'examples',
    tabName: 'examples',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic',
        anchor: 'basic-ex',
        outlet: DemoBasicComponent
      },
      {
        title: 'Complex data model',
        anchor: 'complexDatamodel-ex',
        outlet: ComplexDatamodelDemoComponent
      },
      {
        title: 'Custom item template',
        anchor: 'itemTemplate-ex',
        outlet: CustomItemTemplateDemoComponent
      }
    ]
  }
];
