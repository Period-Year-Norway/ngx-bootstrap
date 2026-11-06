// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoRatingBasicComponent } from './demos/basic/basic';
import { DemoRatingCustomComponent } from './demos/custom/custom';
import { DemoRatingDynamicComponent } from './demos/dynamic/dynamic';
import { DemoRatingSelectOnEnterComponent } from './demos/select-on-enter/select-on-enter';
import { DemoRatingConfigComponent } from './demos/config/config';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import { NgApiDocComponent, NgApiDocConfigComponent } from '@ngx-bootstrap-doc/docs';

import * as rawDemosBasicBasic from './demos/basic/basic?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamic from './demos/dynamic/dynamic?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicHtml from './demos/dynamic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosCustomCustom from './demos/custom/custom?raw' with { loader: 'text' };
import * as rawDemosCustomCustomHtml from './demos/custom/custom.html?raw' with { loader: 'text' };
import * as rawDemosSelectOnEnterSelectOnEnter from './demos/select-on-enter/select-on-enter?raw' with { loader: 'text' };
import * as rawDemosSelectOnEnterSelectOnEnterHtml from './demos/select-on-enter/select-on-enter.html?raw' with { loader: 'text' };
import * as rawDemosConfigConfig from './demos/config/config?raw' with { loader: 'text' };
import * as rawDemosConfigConfigHtml from './demos/config/config.html?raw' with { loader: 'text' };
import * as rawDocsUsageMd from './docs/usage.md?raw' with { loader: 'text' };

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Overview',
    anchor: 'overview',
    tabName: 'overview',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic rating',
        anchor: 'rating-basic',
        component: rawDemosBasicBasic,
        html: rawDemosBasicBasicHtml,
        outlet: DemoRatingBasicComponent
      },
      {
        title: 'Dynamic rating',
        anchor: 'rating-dynamic',
        component: rawDemosDynamicDynamic,
        html: rawDemosDynamicDynamicHtml,
        outlet: DemoRatingDynamicComponent
      },
      {
        title: 'Custom icons',
        anchor: 'rating-custom',
        component: rawDemosCustomCustom,
        html: rawDemosCustomCustomHtml,
        outlet: DemoRatingCustomComponent
      },
      {
        title: 'Select on enter',
        description: `Key navigation example. Focus on rating and use arrow keys to set its value,
          then press <code>Enter</code> to select the value, after this, the rating state will be changed to readonly.`,
        anchor: 'select-on-enter',
        component: rawDemosSelectOnEnterSelectOnEnter,
        html: rawDemosSelectOnEnterSelectOnEnterHtml,
        outlet: DemoRatingSelectOnEnterComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'demo-rating-config',
        component: rawDemosConfigConfig,
        html: rawDemosConfigConfigHtml,
        outlet: DemoRatingConfigComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">rating</span>',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'RatingComponent',
        anchor: 'rating-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'RatingConfig',
        anchor: 'rating-config',
        outlet: NgApiDocConfigComponent
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
        title: 'Basic rating',
        anchor: 'rating-basic-ex',
        outlet: DemoRatingBasicComponent
      },
      {
        title: 'Dynamic rating',
        anchor: 'rating-dynamic-ex',
        outlet: DemoRatingDynamicComponent
      },
      {
        title: 'Custom icons',
        anchor: 'rating-custom-ex',
        outlet: DemoRatingCustomComponent
      },
      {
        title: 'Select on enter',
        anchor: 'select-on-enter-ex',
        outlet: DemoRatingSelectOnEnterComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'demo-rating-config-ex',
        outlet: DemoRatingConfigComponent
      }
    ]
  }
];
