// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoPaginationBasicComponent } from './demos/basic/basic';
import { DemoPaginationPagerComponent } from './demos/pager/pager';
import { DemoPaginationLimitComponent } from './demos/limit/limit';
// import { DemoPaginationStylingComponent } from './demos/styling-global/styling-global';
import { DemoPaginationManualSwitchingComponent } from './demos/manual-switching/manual-switching';
import { DemoPaginationPageChangedComponent } from './demos/page-changed-event/page-changed-event';
import { DemoPaginationPagesCountChangedComponent } from './demos/pages-count-changed/pages-count-changed';
import { DemoPaginationBoundaryLinksComponent } from './demos/boundary-links/boundary-links';
import { DemoPaginationDirectionLinksComponent } from './demos/direction-links/direction-links';
import { DemoPaginationCustomLinksContentComponent } from './demos/custom-links-content/custom-links-content';
import { DemoPaginationContentSwitchingComponent } from './demos/content-switching/content-switching';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';
import { DemoPaginationDisabledComponent } from './demos/disabled/disabled';
import { DemoPaginationRotateComponent } from './demos/rotate/rotate';
import { DemoPaginationCustomTemplateComponent } from './demos/custom-template/custom-template';

import * as rawDemosBasicBasicTs from './demos/basic/basic.ts?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosManualSwitchingManualSwitchingTs from './demos/manual-switching/manual-switching.ts?raw' with { loader: 'text' };
import * as rawDemosManualSwitchingManualSwitchingHtml from './demos/manual-switching/manual-switching.html?raw' with { loader: 'text' };
import * as rawDemosPageChangedEventPageChangedEventTs from './demos/page-changed-event/page-changed-event.ts?raw' with { loader: 'text' };
import * as rawDemosPageChangedEventPageChangedEventHtml from './demos/page-changed-event/page-changed-event.html?raw' with { loader: 'text' };
import * as rawDemosPagesCountChangedPagesCountChangedTs from './demos/pages-count-changed/pages-count-changed.ts?raw' with { loader: 'text' };
import * as rawDemosPagesCountChangedPagesCountChangedHtml from './demos/pages-count-changed/pages-count-changed.html?raw' with { loader: 'text' };
import * as rawDemosBoundaryLinksBoundaryLinksTs from './demos/boundary-links/boundary-links.ts?raw' with { loader: 'text' };
import * as rawDemosBoundaryLinksBoundaryLinksHtml from './demos/boundary-links/boundary-links.html?raw' with { loader: 'text' };
import * as rawDemosDirectionLinksDirectionLinksTs from './demos/direction-links/direction-links.ts?raw' with { loader: 'text' };
import * as rawDemosDirectionLinksDirectionLinksHtml from './demos/direction-links/direction-links.html?raw' with { loader: 'text' };
import * as rawDemosCustomLinksContentCustomLinksContentTs from './demos/custom-links-content/custom-links-content.ts?raw' with { loader: 'text' };
import * as rawDemosCustomLinksContentCustomLinksContentHtml from './demos/custom-links-content/custom-links-content.html?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledTs from './demos/disabled/disabled.ts?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledHtml from './demos/disabled/disabled.html?raw' with { loader: 'text' };
import * as rawDemosLimitLimitTs from './demos/limit/limit.ts?raw' with { loader: 'text' };
import * as rawDemosLimitLimitHtml from './demos/limit/limit.html?raw' with { loader: 'text' };
import * as rawDemosRotateRotateTs from './demos/rotate/rotate.ts?raw' with { loader: 'text' };
import * as rawDemosRotateRotateHtml from './demos/rotate/rotate.html?raw' with { loader: 'text' };
import * as rawDemosContentSwitchingContentSwitchingTs from './demos/content-switching/content-switching.ts?raw' with { loader: 'text' };
import * as rawDemosContentSwitchingContentSwitchingHtml from './demos/content-switching/content-switching.html?raw' with { loader: 'text' };
import * as rawDemosPagerPagerTs from './demos/pager/pager.ts?raw' with { loader: 'text' };
import * as rawDemosPagerPagerHtml from './demos/pager/pager.html?raw' with { loader: 'text' };
import * as rawDemosCustomTemplateCustomTemplateTs from './demos/custom-template/custom-template.ts?raw' with { loader: 'text' };
import * as rawDemosCustomTemplateCustomTemplateHtml from './demos/custom-template/custom-template.html?raw' with { loader: 'text' };
import * as rawDemosStylingGlobalStylingGlobalTs from './demos/styling-global/styling-global.ts?raw' with { loader: 'text' };
import * as rawDemosStylingGlobalStylingGlobalHtml from './demos/styling-global/styling-global.html?raw' with { loader: 'text' };
import * as rawDocsUsageMd from './docs/usage.md?raw' with { loader: 'text' };

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Overview',
    anchor: 'overview',
    tabName: 'overview',
    outlet: ExamplesComponent,
    description: `On small screens bootstrap4 pagination can be cropped`,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: rawDemosBasicBasicTs,
        html: rawDemosBasicBasicHtml,
        outlet: DemoPaginationBasicComponent
      },
      {
        title: 'Manual switching page',
        anchor: 'manual-switching',
        component: rawDemosManualSwitchingManualSwitchingTs,
        html: rawDemosManualSwitchingManualSwitchingHtml,
        outlet: DemoPaginationManualSwitchingComponent
      },
      {
        title: 'Page changed event',
        anchor: 'page-changed-event',
        component: rawDemosPageChangedEventPageChangedEventTs,
        html: rawDemosPageChangedEventPageChangedEventHtml,
        outlet: DemoPaginationPageChangedComponent
      },
      {
        title: 'Pages count changed event',
        anchor: 'pages-count-changed',
        component: rawDemosPagesCountChangedPagesCountChangedTs,
        html: rawDemosPagesCountChangedPagesCountChangedHtml,
        outlet: DemoPaginationPagesCountChangedComponent
      },
      {
        title: 'Boundary links',
        anchor: 'boundary-links',
        component: rawDemosBoundaryLinksBoundaryLinksTs,
        html: rawDemosBoundaryLinksBoundaryLinksHtml,
        outlet: DemoPaginationBoundaryLinksComponent
      },
      {
        title: 'Direction links',
        anchor: 'direction-links',
        component: rawDemosDirectionLinksDirectionLinksTs,
        html: rawDemosDirectionLinksDirectionLinksHtml,
        outlet: DemoPaginationDirectionLinksComponent
      },
      {
        title: 'Custom links content',
        anchor: 'custom-links-content',
        component: rawDemosCustomLinksContentCustomLinksContentTs,
        html: rawDemosCustomLinksContentCustomLinksContentHtml,
        outlet: DemoPaginationCustomLinksContentComponent
      },
      {
        title: 'Disabled',
        anchor: 'pagination-disabled',
        component: rawDemosDisabledDisabledTs,
        html: rawDemosDisabledDisabledHtml,
        outlet: DemoPaginationDisabledComponent
      },
      {
        title: 'Limits',
        anchor: 'pagination-limit',
        component: rawDemosLimitLimitTs,
        html: rawDemosLimitLimitHtml,
        description: `<p>Limit the maximum visible page numbers</p>`,
        outlet: DemoPaginationLimitComponent
      },
      {

        title: 'Centering the active page link',
        anchor: 'pagination-rotate',
        component: rawDemosRotateRotateTs,
        html: rawDemosRotateRotateHtml,
        description: `<p>Set current page link to center</p>`,
        outlet: DemoPaginationRotateComponent
      },
      {
        title: 'Content switching',
        anchor: 'content-switching',
        component: rawDemosContentSwitchingContentSwitchingTs,
        html: rawDemosContentSwitchingContentSwitchingHtml,
        outlet: DemoPaginationContentSwitchingComponent
      },
      {
        title: 'Pager',
        anchor: 'pagination-pager',
        component: rawDemosPagerPagerTs,
        html: rawDemosPagerPagerHtml,
        outlet: DemoPaginationPagerComponent
      },
      {
        title: 'Custom Template',
        anchor: 'custom-template',
        description: `
          <p>
            It is possible to customize what exactly is displayed in each pagination link. To overwrite default
            templates use these inputs:
            <ul>
              <li><code>customPageTemplate</code></li>
              <li><code>customNextTemplate</code></li>
              <li><code>customPreviousTemplate</code></li>
              <li><code>customFirstTemplate</code></li>
              <li><code>customLastTemplate</code></li>
            </ul>
            Each template has a context object. The object <code>PaginationLinkContext</code> is available for all
            templates and for page numbers there is a <code>PaginationNumberLinkContext</code> that
            contains the page number.
          </p>
        `,
        component: rawDemosCustomTemplateCustomTemplateTs,
        html: rawDemosCustomTemplateCustomTemplateHtml,
        outlet: DemoPaginationCustomTemplateComponent
      }
      /* TODO: temporary disabled pageBtnClass option
      {
        title: 'Styling',
        anchor: 'pagination-styling',
        component: rawDemosStylingGlobalStylingGlobalTs,
        html: rawDemosStylingGlobalStylingGlobalHtml,
        outlet: DemoPaginationStylingComponent
      }*/
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">pagination</span>',
    content: [
      {
        title: 'PaginationComponent',
        anchor: 'pagination-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'PagerComponent',
        anchor: 'pager-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'PaginationConfig',
        anchor: 'pagination-config',
        outlet: NgApiDocConfigComponent
      },
      {
        title: 'PaginationLinkContext',
        anchor: 'pagination-link-context',
        outlet: NgApiDocConfigComponent
      },
      {
        title: 'PaginationNumberLinkContext',
        anchor: 'pagination-number-link-context',
        outlet: NgApiDocConfigComponent
      },
      {
        title: 'PagesModel',
        anchor: 'pagination-models',
        outlet: NgApiDocConfigComponent
      }
    ]
  },
  {
    name: 'Examples',
    anchor: 'examples',
    tabName: 'examples',
    outlet: ExamplesComponent,
    description: `<p>On small screens bootstrap4 pagination can be cropped</p>`,
    content: [
      {
        title: 'Basic',
        anchor: 'basic-ex',
        outlet: DemoPaginationBasicComponent
      },
      {
        title: 'Manual switching page',
        anchor: 'manual-switching-ex',
        outlet: DemoPaginationManualSwitchingComponent
      },
      {
        title: 'Page changed event',
        anchor: 'page-changed-event-ex',
        outlet: DemoPaginationPageChangedComponent
      },
      {
        title: 'Pages count changed event',
        anchor: 'pages-count-changed-ex',
        outlet: DemoPaginationPagesCountChangedComponent
      },
      {
        title: 'Boundary links',
        anchor: 'boundary-links-ex',
        outlet: DemoPaginationBoundaryLinksComponent
      },
      {
        title: 'Direction links',
        anchor: 'direction-links-ex',
        outlet: DemoPaginationDirectionLinksComponent
      },
      {
        title: 'Custom links content',
        anchor: 'custom-links-content-ex',
        outlet: DemoPaginationCustomLinksContentComponent
      },
      {
        title: 'Disabled',
        anchor: 'pagination-disabled-ex',
        outlet: DemoPaginationDisabledComponent
      },
      {
        title: 'Limits',
        anchor: 'pagination-limit-ex',
        outlet: DemoPaginationLimitComponent
      },
      {

        title: 'Centering the active page link',
        anchor: 'pagination-rotate-ex',
        outlet: DemoPaginationRotateComponent
      },
      {
        title: 'Content switching',
        anchor: 'content-switching-ex',
        outlet: DemoPaginationContentSwitchingComponent
      },
      {
        title: 'Pager',
        anchor: 'pagination-pager-ex',
        outlet: DemoPaginationPagerComponent
      },
      {
        title: 'Custom Template',
        anchor: 'custom-template-ex',
        outlet: DemoPaginationCustomTemplateComponent
      }
    ]
  }
];
