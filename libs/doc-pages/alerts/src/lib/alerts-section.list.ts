// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoAlertBasicComponent } from './demos/basic/basic';
import { DemoAlertLinkComponent } from './demos/link/link';
import { DemoAlertContentComponent } from './demos/content/content';
import { DemoAlertDismissComponent } from './demos/dismiss/dismiss';
import { DemoAlertDynamicHtmlComponent } from './demos/dynamic-html/dynamic-html';
import { DemoAlertDynamicContentComponent } from './demos/dynamic-content/dynamic-content';
import { DemoAlertTimeoutComponent } from './demos/dismiss-on-timeout/dismiss-on-timeout';
import { DemoAlertStylingGlobalComponent } from './demos/styling-global/styling-global';
import { DemoAlertStylingLocalComponent } from './demos/styling-local/styling-local';
import { DemoAlertConfigComponent } from './demos/config/config';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';

import * as rawDemosBasicBasic from './demos/basic/basic?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosLinkLinkTs from './demos/link/link.ts?raw' with { loader: 'text' };
import * as rawDemosLinkLinkHtml from './demos/link/link.html?raw' with { loader: 'text' };
import * as rawDemosContentContentTs from './demos/content/content.ts?raw' with { loader: 'text' };
import * as rawDemosContentContentHtml from './demos/content/content.html?raw' with { loader: 'text' };
import * as rawDemosDismissDismissTs from './demos/dismiss/dismiss.ts?raw' with { loader: 'text' };
import * as rawDemosDismissDismissHtml from './demos/dismiss/dismiss.html?raw' with { loader: 'text' };
import * as rawDemosDynamicHtmlDynamicHtmlTs from './demos/dynamic-html/dynamic-html.ts?raw' with { loader: 'text' };
import * as rawDemosDynamicHtmlDynamicHtmlHtml from './demos/dynamic-html/dynamic-html.html?raw' with { loader: 'text' };
import * as rawDemosDynamicContentDynamicContentTs from './demos/dynamic-content/dynamic-content.ts?raw' with { loader: 'text' };
import * as rawDemosDynamicContentDynamicContentHtml from './demos/dynamic-content/dynamic-content.html?raw' with { loader: 'text' };
import * as rawDemosDismissOnTimeoutDismissOnTimeoutTs from './demos/dismiss-on-timeout/dismiss-on-timeout.ts?raw' with { loader: 'text' };
import * as rawDemosDismissOnTimeoutDismissOnTimeoutHtml from './demos/dismiss-on-timeout/dismiss-on-timeout.html?raw' with { loader: 'text' };
import * as rawDemosStylingGlobalStylingGlobalTs from './demos/styling-global/styling-global.ts?raw' with { loader: 'text' };
import * as rawDemosStylingGlobalStylingGlobalHtml from './demos/styling-global/styling-global.html?raw' with { loader: 'text' };
import * as rawDemosStylingLocalStylingLocalTs from './demos/styling-local/styling-local.ts?raw' with { loader: 'text' };
import * as rawDemosStylingLocalStylingLocalHtml from './demos/styling-local/styling-local.html?raw' with { loader: 'text' };
import * as rawDemosConfigConfigTs from './demos/config/config.ts?raw' with { loader: 'text' };
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
        title: 'Basic',
        anchor: 'basic',
        description: `<p>Alerts are available for any length of text, as well as an optional dismiss
          button. For proper styling, use one of the four <strong>required</strong>
          contextual classes (e.g., <code>.alert-success</code>). For inline
          dismissal, use the <code>dismissible</code> property.</p>`,
        component: rawDemosBasicBasic,
        html: rawDemosBasicBasicHtml,
        outlet: DemoAlertBasicComponent
      },
      {
        title: 'Link color',
        anchor: 'link-color',
        description: `<p>Use the <code>.alert-link</code> utility class to quickly provide matching
          colored links within any alert.</p>`,
        component: rawDemosLinkLinkTs,
        html: rawDemosLinkLinkHtml,
        outlet: DemoAlertLinkComponent
      },
      {
        title: 'Additional content',
        anchor: 'additional-content',
        description: `<p>Alerts can also contain additional HTML elements like headings and
          paragraphs.</p>`,
        component: rawDemosContentContentTs,
        html: rawDemosContentContentHtml,
        outlet: DemoAlertContentComponent
      },
      {
        title: 'Dismissing',
        anchor: 'dismissing',
        description: `<p>Alerts have <code>dismiss</code> option. Enabling it will show close button
          to the right of the alert.</p>`,
        component: rawDemosDismissDismissTs,
        html: rawDemosDismissDismissHtml,
        outlet: DemoAlertDismissComponent
      },
      {
        title: 'Dynamic html',
        anchor: 'dynamic-html',
        description: `<p>Sometimes you will need to show dynamically generated html in alerts, here
          is how you can make it. And don't forget to sanitize your html.</p>`,
        component: rawDemosDynamicHtmlDynamicHtmlTs,
        html: rawDemosDynamicHtmlDynamicHtmlHtml,
        outlet: DemoAlertDynamicHtmlComponent
      },
      {
        title: 'Dynamic content',
        anchor: 'dynamic-content',
        description: `<p>Alerts fully support bindings.</p>`,
        component: rawDemosDynamicContentDynamicContentTs,
        html: rawDemosDynamicContentDynamicContentHtml,
        outlet: DemoAlertDynamicContentComponent
      },
      {
        title: 'Dismiss on timeout',
        anchor: 'dismiss-on-timeout',
        description: `<p>You can simply set timeout in milliseconds to <code>dismissOnTimeout</code>
          property to create self closable alerts.</p>`,
        component: rawDemosDismissOnTimeoutDismissOnTimeoutTs,
        html: rawDemosDismissOnTimeoutDismissOnTimeoutHtml,
        outlet: DemoAlertTimeoutComponent
      },
      {
        title: 'Global styling',
        anchor: 'global-styling',
        description: `<p>You can add additional types of alerts globally.</p>`,
        component: rawDemosStylingGlobalStylingGlobalTs,
        html: rawDemosStylingGlobalStylingGlobalHtml,
        outlet: DemoAlertStylingGlobalComponent
      },
      {
        title: 'Component level styling',
        anchor: 'local-styling',
        description: `<p>You can add additional types of alerts directly to containing component</p>`,
        component: rawDemosStylingLocalStylingLocalTs,
        html: rawDemosStylingLocalStylingLocalHtml,
        outlet: DemoAlertStylingLocalComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'configuration',
        description: `<p>It is possible to override default alert config partially or completely.</p>`,
        component: rawDemosConfigConfigTs,
        html: rawDemosConfigConfigHtml,
        outlet: DemoAlertConfigComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">alerts</span>',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'AlertComponent',
        anchor: 'alert-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'AlertConfig',
        anchor: 'alert-config',
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
        title: 'Basic',
        anchor: 'basic-ex',
        outlet: DemoAlertBasicComponent
      },
      {
        title: 'Link color',
        anchor: 'link-color-ex',
        outlet: DemoAlertLinkComponent
      },
      {
        title: 'Additional content',
        anchor: 'additional-content-ex',
        outlet: DemoAlertContentComponent
      },
      {
        title: 'Dismissing',
        anchor: 'dismissing-ex',
        outlet: DemoAlertDismissComponent
      },
      {
        title: 'Dynamic html',
        anchor: 'dynamic-html-ex',
        outlet: DemoAlertDynamicHtmlComponent
      },
      {
        title: 'Dynamic content',
        anchor: 'dynamic-content-ex',
        outlet: DemoAlertDynamicContentComponent
      },
      {
        title: 'Dismiss on timeout',
        anchor: 'dismiss-on-timeout-ex',
        outlet: DemoAlertTimeoutComponent
      },
      {
        title: 'Global styling',
        anchor: 'global-styling-ex',
        outlet: DemoAlertStylingGlobalComponent
      },
      {
        title: 'Component level styling',
        anchor: 'local-styling-ex',
        outlet: DemoAlertStylingLocalComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'configuration-ex',
        outlet: DemoAlertConfigComponent
      }
    ]
  }
];
