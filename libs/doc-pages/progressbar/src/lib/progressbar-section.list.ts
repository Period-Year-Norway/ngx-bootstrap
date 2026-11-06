// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoProgressbarStaticComponent } from './demos/static/static';
import { DemoProgressbarDynamicComponent } from './demos/dynamic/dynamic';
import { DemoProgressbarStackedComponent } from './demos/stacked/stacked';
import { DemoProgressbarConfigComponent } from './demos/config/config';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';

import * as rawDemosStaticStatic from './demos/static/static?raw' with { loader: 'text' };
import * as rawDemosStaticStaticHtml from './demos/static/static.html?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamic from './demos/dynamic/dynamic?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicHtml from './demos/dynamic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosStackedStacked from './demos/stacked/stacked?raw' with { loader: 'text' };
import * as rawDemosStackedStackedHtml from './demos/stacked/stacked.html?raw' with { loader: 'text' };
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
        title: 'Static',
        anchor: 'bs3-static',
        component: rawDemosStaticStatic,
        html: rawDemosStaticStaticHtml,
        outlet: DemoProgressbarStaticComponent
      },
      {
        title: 'Dynamic',
        anchor: 'bs3-dynamic',
        component: rawDemosDynamicDynamic,
        html: rawDemosDynamicDynamicHtml,
        outlet: DemoProgressbarDynamicComponent
      },
      {
        title: 'Stacked',
        anchor: 'bs3-stacked',
        component: rawDemosStackedStacked,
        html: rawDemosStackedStackedHtml,
        outlet: DemoProgressbarStackedComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'bs3-config',
        component: rawDemosConfigConfig,
        html: rawDemosConfigConfigHtml,
        outlet: DemoProgressbarConfigComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">progressbar</span>',
    content: [
      {
        title: 'ProgressbarComponent',
        anchor: 'progressbar-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'ProgressbarConfig',
        anchor: 'progress-config',
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
        title: 'Static',
        anchor: 'bs3-static-ex',
        outlet: DemoProgressbarStaticComponent
      },
      {
        title: 'Dynamic',
        anchor: 'bs3-dynamic-ex',
        outlet: DemoProgressbarDynamicComponent
      },
      {
        title: 'Stacked',
        anchor: 'bs3-stacked-ex',
        outlet: DemoProgressbarStackedComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'bs3-config-ex',
        outlet: DemoProgressbarConfigComponent
      }
    ]
  }
];

