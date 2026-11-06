// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';
import { CollapseDemoAnimatedComponent } from './demos/animated/animated';
import { CollapseDemoComponent } from './demos/basic/basic';
import { CollapseDemoEventsComponent } from './demos/events/events';
import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { InlineDisplayDemoComponent } from './demos/inline-display/inline-display';
import { ToggleManualDemoComponent } from './demos/toggle-manual/toggle-manual';

import { NgApiDocComponent } from '@ngx-bootstrap-doc/docs';

import * as rawDemosBasicBasic from './demos/basic/basic?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimated from './demos/animated/animated?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimatedHtml from './demos/animated/animated.html?raw' with { loader: 'text' };
import * as rawDemosEventsEvents from './demos/events/events?raw' with { loader: 'text' };
import * as rawDemosEventsEventsHtml from './demos/events/events.html?raw' with { loader: 'text' };
import * as rawDemosToggleManualToggleManual from './demos/toggle-manual/toggle-manual?raw' with { loader: 'text' };
import * as rawDemosToggleManualToggleManualHtml from './demos/toggle-manual/toggle-manual.html?raw' with { loader: 'text' };
import * as rawDemosInlineDisplayInlineDisplay from './demos/inline-display/inline-display?raw' with { loader: 'text' };
import * as rawDemosInlineDisplayInlineDisplayHtml from './demos/inline-display/inline-display.html?raw' with { loader: 'text' };
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
        component: rawDemosBasicBasic,
        html: rawDemosBasicBasicHtml,
        outlet: CollapseDemoComponent
      },
      {
        title: 'With animation',
        anchor: 'animated',
        component: rawDemosAnimatedAnimated,
        html: rawDemosAnimatedAnimatedHtml,
        description: `You can enable animation via <code>isAnimated</code> input option`,
        outlet: CollapseDemoAnimatedComponent
      },
      {
        title: 'Events',
        anchor: 'events',
        component: rawDemosEventsEvents,
        html: rawDemosEventsEventsHtml,
        description: `Collapse directive exposes 4 events: <code>collapses</code>, that fires when a collapse was triggered (animation start),
                        <code>collapsed</code>, that fires when a content was hidden (animation finished),
                        <code>expands</code>, that fires when a expansion was triggered (animation start)
                      and <code>expanded</code>, that fires when a content was shown`,
        outlet: CollapseDemoEventsComponent
      },
      {
        title: 'Manual toggle',
        anchor: 'manual-toggle',
        component: rawDemosToggleManualToggleManual,
        html: rawDemosToggleManualToggleManualHtml,
        outlet: ToggleManualDemoComponent
      },
      {
        title: 'Inline display',
        anchor: 'inline-display',
        component: rawDemosInlineDisplayInlineDisplay,
        html: rawDemosInlineDisplayInlineDisplayHtml,
        outlet: InlineDisplayDemoComponent
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
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">collapse</span>',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'CollapseDirective',
        anchor: 'collapse-directive',
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
        outlet: CollapseDemoComponent
      },
      {
        title: 'With animation',
        anchor: 'animated-ex',
        outlet: CollapseDemoAnimatedComponent
      },
      {
        title: 'Events',
        anchor: 'events-ex',
        outlet: CollapseDemoEventsComponent
      },
      {
        title: 'Manual toggle',
        anchor: 'manual-toggle-ex',
        outlet: ToggleManualDemoComponent
      },
      {
        title: 'Inline display',
        anchor: 'inline-display-ex',
        outlet: InlineDisplayDemoComponent
      }
    ]
  }
];
