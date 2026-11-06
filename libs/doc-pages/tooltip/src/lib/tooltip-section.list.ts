// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoTooltipAdaptivePositionComponent } from './demos/adaptive-position/adaptive-position';
import { DemoTooltipBasicComponent } from './demos/basic/basic';
import { DemoTooltipClassComponent } from './demos/class/class';
import { DemoTooltipConfigComponent } from './demos/config/config';
import { DemoTooltipContainerComponent } from './demos/container/container';
import { DemoTooltipCustomContentComponent } from './demos/custom-content/custom-content';
import { DemoTooltipDelayComponent } from './demos/delay/delay';
import { DemoTooltipDismissComponent } from './demos/dismiss/dismiss';
import { DemoTooltipDynamicComponent } from './demos/dynamic/dynamic';
import { DemoTooltipDynamicHtmlComponent } from './demos/dynamic-html/dynamic-html';
import { DemoTooltipPlacementComponent } from './demos/placement/placement';
import { DemoTooltipStylingLocalComponent } from './demos/styling-local/styling-local';
import { DemoTooltipTriggersCustomComponent } from './demos/triggers-custom/triggers-custom';
import { DemoTooltipTriggersManualComponent } from './demos/triggers-manual/triggers-manual';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';

import * as rawDemosBasicBasicTs from './demos/basic/basic.ts?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosPlacementPlacementTs from './demos/placement/placement.ts?raw' with { loader: 'text' };
import * as rawDemosPlacementPlacementHtml from './demos/placement/placement.html?raw' with { loader: 'text' };
import * as rawDemosAdaptivePositionAdaptivePositionTs from './demos/adaptive-position/adaptive-position.ts?raw' with { loader: 'text' };
import * as rawDemosAdaptivePositionAdaptivePositionHtml from './demos/adaptive-position/adaptive-position.html?raw' with { loader: 'text' };
import * as rawDemosDismissDismissTs from './demos/dismiss/dismiss.ts?raw' with { loader: 'text' };
import * as rawDemosDismissDismissHtml from './demos/dismiss/dismiss.html?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicTs from './demos/dynamic/dynamic.ts?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicHtml from './demos/dynamic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosCustomContentCustomContentTs from './demos/custom-content/custom-content.ts?raw' with { loader: 'text' };
import * as rawDemosCustomContentCustomContentHtml from './demos/custom-content/custom-content.html?raw' with { loader: 'text' };
import * as rawDemosDynamicHtmlDynamicHtmlTs from './demos/dynamic-html/dynamic-html.ts?raw' with { loader: 'text' };
import * as rawDemosDynamicHtmlDynamicHtmlHtml from './demos/dynamic-html/dynamic-html.html?raw' with { loader: 'text' };
import * as rawDemosContainerContainerTs from './demos/container/container.ts?raw' with { loader: 'text' };
import * as rawDemosContainerContainerHtml from './demos/container/container.html?raw' with { loader: 'text' };
import * as rawDemosConfigConfigTs from './demos/config/config.ts?raw' with { loader: 'text' };
import * as rawDemosConfigConfigHtml from './demos/config/config.html?raw' with { loader: 'text' };
import * as rawDemosTriggersCustomTriggersCustomTs from './demos/triggers-custom/triggers-custom.ts?raw' with { loader: 'text' };
import * as rawDemosTriggersCustomTriggersCustomHtml from './demos/triggers-custom/triggers-custom.html?raw' with { loader: 'text' };
import * as rawDemosTriggersManualTriggersManualTs from './demos/triggers-manual/triggers-manual.ts?raw' with { loader: 'text' };
import * as rawDemosTriggersManualTriggersManualHtml from './demos/triggers-manual/triggers-manual.html?raw' with { loader: 'text' };
import * as rawDemosStylingLocalStylingLocalTs from './demos/styling-local/styling-local.ts?raw' with { loader: 'text' };
import * as rawDemosStylingLocalStylingLocalHtml from './demos/styling-local/styling-local.html?raw' with { loader: 'text' };
import * as rawDemosClassClassTs from './demos/class/class.ts?raw' with { loader: 'text' };
import * as rawDemosClassClassHtml from './demos/class/class.html?raw' with { loader: 'text' };
import * as rawDemosDelayDelayTs from './demos/delay/delay.ts?raw' with { loader: 'text' };
import * as rawDemosDelayDelayHtml from './demos/delay/delay.html?raw' with { loader: 'text' };
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
        component: rawDemosBasicBasicTs,
        html: rawDemosBasicBasicHtml,
        outlet: DemoTooltipBasicComponent
      },
      {
        title: 'Placement',
        anchor: 'placement',
        component: rawDemosPlacementPlacementTs,
        html: rawDemosPlacementPlacementHtml,
        description: `<p>Four positioning options are available: <code>top</code>, <code>right</code>,
          <code>bottom</code>, and <code>left</code>. Besides that, <code>auto</code> option may be
          used to detect a position that fits the component on the screen.</p>`,
        outlet: DemoTooltipPlacementComponent
      },
      {
        title: 'Disable adaptive position',
        anchor: 'adaptive-position',
        description: `
          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>
        `,
        component: rawDemosAdaptivePositionAdaptivePositionTs,
        html: rawDemosAdaptivePositionAdaptivePositionHtml,
        outlet: DemoTooltipAdaptivePositionComponent
      },
      {
        title: 'Dismiss on next click',
        anchor: 'dismiss',
        component: rawDemosDismissDismissTs,
        html: rawDemosDismissDismissHtml,
        description: `<p>Use the <code>focus</code> trigger to dismiss tooltips on the next click
          that the user makes.</p>`,
        outlet: DemoTooltipDismissComponent
      },
      {
        title: 'Dynamic Content',
        anchor: 'dynamic-content',
        component: rawDemosDynamicDynamicTs,
        html: rawDemosDynamicDynamicHtml,
        description: `<p>Pass a string as tooltip content</p>`,
        outlet: DemoTooltipDynamicComponent
      },
      {
        title: 'Custom content template',
        anchor: 'custom-content-template',
        component: rawDemosCustomContentCustomContentTs,
        html: rawDemosCustomContentCustomContentHtml,
        description: `<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,
        and provide template ref <code>[tooltip]="myId"</code> as tooltip content</p>`,
        outlet: DemoTooltipCustomContentComponent
      },
      {
        title: 'Dynamic Html',
        anchor: 'dynamic-html',
        component: rawDemosDynamicHtmlDynamicHtmlTs,
        html: rawDemosDynamicHtmlDynamicHtmlHtml,
        description: `<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you
          can display any dynamic html</p>`,
        outlet: DemoTooltipDynamicHtmlComponent
      },
      {
        title: 'Append to body',
        anchor: 'append-to-body',
        component: rawDemosContainerContainerTs,
        html: rawDemosContainerContainerHtml,
        description: `<p>When you have some styles on a parent element that interfere with a tooltip,
          you’ll want to specify a <code>container="body"</code> so that the tooltip’s HTML will be
          appended to body. This will help to avoid rendering problems in more complex components
          (like our input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>`,
        outlet: DemoTooltipContainerComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults',
        component: rawDemosConfigConfigTs,
        html: rawDemosConfigConfigHtml,
        outlet: DemoTooltipConfigComponent
      },
      {
        title: 'Custom triggers',
        anchor: 'triggers-custom',
        component: rawDemosTriggersCustomTriggersCustomTs,
        html: rawDemosTriggersCustomTriggersCustomHtml,
        outlet: DemoTooltipTriggersCustomComponent
      },
      {
        title: 'Manual triggering',
        anchor: 'triggers-manual',
        component: rawDemosTriggersManualTriggersManualTs,
        html: rawDemosTriggersManualTriggersManualHtml,
        description: `<p>You can manage tooltip using its <code>show()</code>, <code>hide()</code> and <code>toggle()</code> methods.
          If you want to manage tooltip's state manually, use <code>triggers=""</code></p>`,
        outlet: DemoTooltipTriggersManualComponent
      },
      {
        title: 'Component level styling',
        anchor: 'styling-local',
        component: rawDemosStylingLocalStylingLocalTs,
        html: rawDemosStylingLocalStylingLocalHtml,
        outlet: DemoTooltipStylingLocalComponent
      },
      {
        title: 'Custom class',
        anchor: 'custom-class',
        component: rawDemosClassClassTs,
        html: rawDemosClassClassHtml,
        outlet: DemoTooltipClassComponent
      },
      {
        title: 'Tooltip with delay',
        anchor: 'tooltip-delay',
        component: rawDemosDelayDelayTs,
        html: rawDemosDelayDelayHtml,
        description: `<p>Hold on cursor above button for 0,5 second or more to see delayed tooltip</p>`,
        outlet: DemoTooltipDelayComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">tooltip</span>',
    content: [
      {
        title: 'TooltipDirective',
        anchor: 'tooltip-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'TooltipConfig',
        anchor: 'tooltip-config',
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
        outlet: DemoTooltipBasicComponent
      },
      {
        title: 'Placement',
        anchor: 'placement-ex',
        outlet: DemoTooltipPlacementComponent
      },
      {
        title: 'Disable adaptive position',
        anchor: 'adaptive-position-ex',
        outlet: DemoTooltipAdaptivePositionComponent
      },
      {
        title: 'Dismiss on next click',
        anchor: 'dismiss-ex',
        outlet: DemoTooltipDismissComponent
      },
      {
        title: 'Dynamic Content',
        anchor: 'dynamic-content-ex',
        outlet: DemoTooltipDynamicComponent
      },
      {
        title: 'Custom content template',
        anchor: 'custom-content-template-ex',
        outlet: DemoTooltipCustomContentComponent
      },
      {
        title: 'Dynamic Html',
        anchor: 'dynamic-html-ex',
        outlet: DemoTooltipDynamicHtmlComponent
      },
      {
        title: 'Append to body',
        anchor: 'append-to-body-ex',
        outlet: DemoTooltipContainerComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults-ex',
        outlet: DemoTooltipConfigComponent
      },
      {
        title: 'Custom triggers',
        anchor: 'triggers-custom-ex',
        outlet: DemoTooltipTriggersCustomComponent
      },
      {
        title: 'Manual triggering',
        anchor: 'triggers-manual-ex',
        outlet: DemoTooltipTriggersManualComponent
      },
      {
        title: 'Component level styling',
        anchor: 'styling-local-ex',
        outlet: DemoTooltipStylingLocalComponent
      },
      {
        title: 'Custom class',
        anchor: 'custom-class-ex',
        outlet: DemoTooltipClassComponent
      },
      {
        title: 'Tooltip with delay',
        anchor: 'tooltip-delay-ex',
        outlet: DemoTooltipDelayComponent
      }
    ]
  }
];

