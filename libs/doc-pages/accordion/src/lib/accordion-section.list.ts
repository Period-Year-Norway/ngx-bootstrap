// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoAccordionAnimatedComponent } from './demos/animated/animated';
import { DemoAccordionBasicComponent } from './demos/basic/basic';
import { DemoAccordionConfigComponent } from './demos/config/config';
import { DemoAccordionCustomHTMLComponent } from './demos/custom-html/custom-html';
import { DemoAccordionDisabledComponent } from './demos/disabled/disabled';
import { DemoAccordionDynamicComponent } from './demos/dymanic/dynamic';
import { DemoAccordionManualToggleComponent } from './demos/manual-toggle/manual-toggle';
import { DemoAccordionOneAtATimeComponent } from './demos/one-at-a-time/one-at-a-time';
import { DemoAccordionOpenEventComponent } from './demos/open-event/open-event';
import { DemoAccordionStylingComponent } from './demos/styling/styling';

import { ContentSection } from '@ngx-bootstrap-doc/docs';

import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';
import { DemoAccordionOpenedComponent } from './demos/opened/opened';
import { DemoAccordionDynamicBodyComponent } from './demos/dynamic-body/dynamic-body';

import * as rawDemosBasicBasic from './demos/basic/basic?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimated from './demos/animated/animated?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimatedHtml from './demos/animated/animated.html?raw' with { loader: 'text' };
import * as rawDemosOpenEventOpenEvent from './demos/open-event/open-event?raw' with { loader: 'text' };
import * as rawDemosOpenEventOpenEventHtml from './demos/open-event/open-event.html?raw' with { loader: 'text' };
import * as rawDemosCustomHtmlCustomHtml from './demos/custom-html/custom-html?raw' with { loader: 'text' };
import * as rawDemosCustomHtmlCustomHtmlHtml from './demos/custom-html/custom-html.html?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabled from './demos/disabled/disabled?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledHtml from './demos/disabled/disabled.html?raw' with { loader: 'text' };
import * as rawDemosOpenedOpened from './demos/opened/opened?raw' with { loader: 'text' };
import * as rawDemosOpenedOpenedHtml from './demos/opened/opened.html?raw' with { loader: 'text' };
import * as rawDemosDymanicDynamic from './demos/dymanic/dynamic?raw' with { loader: 'text' };
import * as rawDemosDymanicDynamicHtml from './demos/dymanic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosDynamicBodyDynamicBody from './demos/dynamic-body/dynamic-body?raw' with { loader: 'text' };
import * as rawDemosDynamicBodyDynamicBodyHtml from './demos/dynamic-body/dynamic-body.html?raw' with { loader: 'text' };
import * as rawDemosManualToggleManualToggle from './demos/manual-toggle/manual-toggle?raw' with { loader: 'text' };
import * as rawDemosManualToggleManualToggleHtml from './demos/manual-toggle/manual-toggle.html?raw' with { loader: 'text' };
import * as rawDemosOneAtATimeOneAtATime from './demos/one-at-a-time/one-at-a-time?raw' with { loader: 'text' };
import * as rawDemosOneAtATimeOneAtATimeHtml from './demos/one-at-a-time/one-at-a-time.html?raw' with { loader: 'text' };
import * as rawDemosStylingStyling from './demos/styling/styling?raw' with { loader: 'text' };
import * as rawDemosStylingStylingHtml from './demos/styling/styling.html?raw' with { loader: 'text' };
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
        title: 'Basic',
        anchor: 'basic-accordion',
        description: `<p>Click headers to expand/collapse content that is broken into logical sections, much
          like tabs.</p>`,
        component: rawDemosBasicBasic,
        html: rawDemosBasicBasicHtml,
        outlet: DemoAccordionBasicComponent
      },
      {
        title: 'With animation',
        anchor: 'animated-accordion',
        description: `<p>Use input property or config property <code>isAnimated</code> to enable/disable animation</p>`,
        component: rawDemosAnimatedAnimated,
        html: rawDemosAnimatedAnimatedHtml,
        outlet: DemoAccordionAnimatedComponent
      },
      {
        title: 'Group opening event',
        anchor: 'open-event',
        description: `<p>Accordion with <code>isOpenChange</code> event listener.</p>`,
        component: rawDemosOpenEventOpenEvent,
        html: rawDemosOpenEventOpenEventHtml,
        outlet: DemoAccordionOpenEventComponent
      },
      {
        title: 'Custom HTML',
        anchor: 'custom-html',
        component: rawDemosCustomHtmlCustomHtml,
        html: rawDemosCustomHtmlCustomHtmlHtml,
        outlet: DemoAccordionCustomHTMLComponent
      },
      {
        title: 'Disabled',
        anchor: 'disabled',
        component: rawDemosDisabledDisabled,
        html: rawDemosDisabledDisabledHtml,
        outlet: DemoAccordionDisabledComponent
      },
      {
        title: 'Initially opened',
        anchor: 'opened',
        component: rawDemosOpenedOpened,
        html: rawDemosOpenedOpenedHtml,
        outlet: DemoAccordionOpenedComponent
      },
      {
        title: 'Dynamic accordion',
        anchor: 'dynamic-accordion',
        component: rawDemosDymanicDynamic,
        html: rawDemosDymanicDynamicHtml,
        outlet: DemoAccordionDynamicComponent
      },
      {
        title: 'Dynamic body content',
        anchor: 'dynamic-body',
        component: rawDemosDynamicBodyDynamicBody,
        html: rawDemosDynamicBodyDynamicBodyHtml,
        outlet: DemoAccordionDynamicBodyComponent
      },
      {
        title: 'Manual toggle',
        anchor: 'manual-toggle',
        component: rawDemosManualToggleManualToggle,
        html: rawDemosManualToggleManualToggleHtml,
        outlet: DemoAccordionManualToggleComponent
      },
      {
        title: 'Open only one at a time',
        anchor: 'one-time',
        component: rawDemosOneAtATimeOneAtATime,
        html: rawDemosOneAtATimeOneAtATimeHtml,
        outlet: DemoAccordionOneAtATimeComponent
      },
      {
        title: 'Styling',
        anchor: 'styling',
        component: rawDemosStylingStyling,
        html: rawDemosStylingStylingHtml,
        outlet: DemoAccordionStylingComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config',
        component: rawDemosConfigConfig,
        html: rawDemosConfigConfigHtml,
        outlet: DemoAccordionConfigComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    tabName: 'api',
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">accordion</span>',
    usage: rawDocsUsageMd,
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'AccordionComponent',
        anchor: 'AccordionComponent',
        outlet: NgApiDocComponent
      },
      {
        title: 'AccordionPanelComponent',
        anchor: 'AccordionPanelComponent',
        outlet: NgApiDocComponent
      },
      {
        title: 'AccordionConfig',
        anchor: 'AccordionConfig',
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
        anchor: 'basic-accordion-ex',
        outlet: DemoAccordionBasicComponent
      },
      {
        title: 'With animation',
        anchor: 'animated-accordion-ex',
        outlet: DemoAccordionAnimatedComponent
      },
      {
        title: 'Group opening event',
        anchor: 'open-event-ex',
        outlet: DemoAccordionOpenEventComponent
      },
      {
        title: 'Custom HTML',
        anchor: 'custom-html-ex',
        outlet: DemoAccordionCustomHTMLComponent
      },
      {
        title: 'Disabled',
        anchor: 'disabled-ex',
        outlet: DemoAccordionDisabledComponent
      },
      {
        title: 'Initially opened',
        anchor: 'opened-ex',
        outlet: DemoAccordionOpenedComponent
      },
      {
        title: 'Dynamic accordion',
        anchor: 'dynamic-accordion-ex',
        outlet: DemoAccordionDynamicComponent
      },
      {
        title: 'Dynamic body content',
        anchor: 'dynamic-body-ex',
        outlet: DemoAccordionDynamicBodyComponent
      },
      {
        title: 'Manual toggle',
        anchor: 'manual-toggle-ex',
        outlet: DemoAccordionManualToggleComponent
      },
      {
        title: 'Open only one at a time',
        anchor: 'one-time-ex',
        outlet: DemoAccordionOneAtATimeComponent
      },
      {
        title: 'Styling',
        anchor: 'styling-ex',
        outlet: DemoAccordionStylingComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-ex',
        outlet: DemoAccordionConfigComponent
      }
    ]
  }
];
