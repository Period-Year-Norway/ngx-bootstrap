// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoTabsBasicComponent } from './demos/basic/basic';
import { DemoTabsManualSelectionComponent } from './demos/manual-selection/manual-selection';
import { DemoTabsDynamicComponent } from './demos/dynamic/dynamic';
import { DemoTabsPillsComponent } from './demos/pills/pills';
import { DemoTabsVerticalPillsComponent } from './demos/vertical-pills/vertical-pills';
import { DemoTabsJustifiedComponent } from './demos/justified/justified';
import { DemoTabsCustomClassComponent } from './demos/custom-class/custom-class';
import { DemoTabsConfigComponent } from './demos/config/config';
import { DemoTabsDisabledComponent } from './demos/disabled/disabled';
import { DemoTabsCustomComponent } from './demos/custom-template/custom-template';
import { DemoTabsSelectEventComponent } from './demos/select-event/select-event';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';
import { DynamicContentRenderingComponent } from './demos/dynamic-content-rendering/dynamic-content-rendering';
import { DemoDisabledKeyNavigationsComponent } from './demos/disabled-key-navigations/disabled-key-navigations';
import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';

import * as rawDemosBasicBasic from './demos/basic/basic?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosManualSelectionManualSelection from './demos/manual-selection/manual-selection?raw' with { loader: 'text' };
import * as rawDemosManualSelectionManualSelectionHtml from './demos/manual-selection/manual-selection.html?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabled from './demos/disabled/disabled?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledHtml from './demos/disabled/disabled.html?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamic from './demos/dynamic/dynamic?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicHtml from './demos/dynamic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosPillsPills from './demos/pills/pills?raw' with { loader: 'text' };
import * as rawDemosPillsPillsHtml from './demos/pills/pills.html?raw' with { loader: 'text' };
import * as rawDemosVerticalPillsVerticalPills from './demos/vertical-pills/vertical-pills?raw' with { loader: 'text' };
import * as rawDemosVerticalPillsVerticalPillsHtml from './demos/vertical-pills/vertical-pills.html?raw' with { loader: 'text' };
import * as rawDemosJustifiedJustified from './demos/justified/justified?raw' with { loader: 'text' };
import * as rawDemosJustifiedJustifiedHtml from './demos/justified/justified.html?raw' with { loader: 'text' };
import * as rawDemosCustomClassCustomClass from './demos/custom-class/custom-class?raw' with { loader: 'text' };
import * as rawDemosCustomClassCustomClassHtml from './demos/custom-class/custom-class.html?raw' with { loader: 'text' };
import * as rawDemosSelectEventSelectEvent from './demos/select-event/select-event?raw' with { loader: 'text' };
import * as rawDemosSelectEventSelectEventHtml from './demos/select-event/select-event.html?raw' with { loader: 'text' };
import * as rawDemosConfigConfig from './demos/config/config?raw' with { loader: 'text' };
import * as rawDemosConfigConfigHtml from './demos/config/config.html?raw' with { loader: 'text' };
import * as rawDemosCustomTemplateCustomTemplate from './demos/custom-template/custom-template?raw' with { loader: 'text' };
import * as rawDemosCustomTemplateCustomTemplateHtml from './demos/custom-template/custom-template.html?raw' with { loader: 'text' };
import * as rawDemosDynamicContentRenderingDynamicContentRendering from './demos/dynamic-content-rendering/dynamic-content-rendering?raw' with { loader: 'text' };
import * as rawDemosDynamicContentRenderingDynamicContentRenderingHtml from './demos/dynamic-content-rendering/dynamic-content-rendering.html?raw' with { loader: 'text' };
import * as rawDemosDisabledKeyNavigationsDisabledKeyNavigations from './demos/disabled-key-navigations/disabled-key-navigations?raw' with { loader: 'text' };
import * as rawDemosDisabledKeyNavigationsDisabledKeyNavigationsHtml from './demos/disabled-key-navigations/disabled-key-navigations.html?raw' with { loader: 'text' };
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
        outlet: DemoTabsBasicComponent
      },
      {
        title: 'Manual selection',
        anchor: 'tabs-manual-select',
        component: rawDemosManualSelectionManualSelection,
        html: rawDemosManualSelectionManualSelectionHtml,
        outlet: DemoTabsManualSelectionComponent
      },
      {
        title: 'Disabled tabs',
        anchor: 'disabled',
        component: rawDemosDisabledDisabled,
        html: rawDemosDisabledDisabledHtml,
        outlet: DemoTabsDisabledComponent
      },
      {
        title: 'Dynamic tabs',
        anchor: 'tabs-dynamic',
        component: rawDemosDynamicDynamic,
        html: rawDemosDynamicDynamicHtml,
        outlet: DemoTabsDynamicComponent
      },
      {
        title: 'Pills',
        anchor: 'tabs-Pills',
        component: rawDemosPillsPills,
        html: rawDemosPillsPillsHtml,
        outlet: DemoTabsPillsComponent
      },
      {
        title: 'Vertical Pills',
        anchor: 'tabs-vertical-pills',
        component: rawDemosVerticalPillsVerticalPills,
        html: rawDemosVerticalPillsVerticalPillsHtml,
        outlet: DemoTabsVerticalPillsComponent
      },
      {
        title: 'Justified',
        anchor: 'tabs-justified',
        component: rawDemosJustifiedJustified,
        html: rawDemosJustifiedJustifiedHtml,
        description: '<p><i>Bootstrap 4 doesn\'t have justified classes</i></p>',
        outlet: DemoTabsJustifiedComponent
      },
      {
        title: 'Custom class',
        anchor: 'tabs-custom-class',
        component: rawDemosCustomClassCustomClass,
        html: rawDemosCustomClassCustomClassHtml,
        outlet: DemoTabsCustomClassComponent
      },
      {
        title: 'Select event',
        anchor: 'select-event',
        component: rawDemosSelectEventSelectEvent,
        html: rawDemosSelectEventSelectEventHtml,
        description: '<p>You can subscribe to tab\'s <code>select</code> event</p>',
        outlet: DemoTabsSelectEventComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'tabs-config-defaults',
        component: rawDemosConfigConfig,
        html: rawDemosConfigConfigHtml,
        outlet: DemoTabsConfigComponent
      },
      {
        title: 'Custom template',
        anchor: 'tabs-custom-template',
        component: rawDemosCustomTemplateCustomTemplate,
        html: rawDemosCustomTemplateCustomTemplateHtml,
        outlet: DemoTabsCustomComponent
      },
      {
        title: 'Dynamic content rendering',
        anchor: 'dynamic-content-rendering',
        component: rawDemosDynamicContentRenderingDynamicContentRendering,
        html: rawDemosDynamicContentRenderingDynamicContentRenderingHtml,
        outlet: DynamicContentRenderingComponent
      },
      {
        title: 'Accessibility',
        anchor: 'accessibility',
        outlet: DemoAccessibilityComponent
      },
      {
        title: 'Disable key navigations',
        anchor: 'disable-key-navigations',
        component: rawDemosDisabledKeyNavigationsDisabledKeyNavigations,
        html: rawDemosDisabledKeyNavigationsDisabledKeyNavigationsHtml,
        outlet: DemoDisabledKeyNavigationsComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">tabs</span>',
    content: [
      {
        title: 'TabsetComponent',
        anchor: 'tabset-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'TabDirective',
        anchor: 'tab-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'TabHeadingDirective',
        anchor: 'tab-heading-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'TabsetConfig',
        anchor: 'tabset-config',
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
        outlet: DemoTabsBasicComponent
      },
      {
        title: 'Manual selection',
        anchor: 'tabs-manual-select-ex',
        outlet: DemoTabsManualSelectionComponent
      },
      {
        title: 'Disabled tabs',
        anchor: 'disabled-ex',
        outlet: DemoTabsDisabledComponent
      },
      {
        title: 'Dynamic tabs',
        anchor: 'tabs-dynamic-ex',
        outlet: DemoTabsDynamicComponent
      },
      {
        title: 'Pills',
        anchor: 'tabs-Pills-ex',
        outlet: DemoTabsPillsComponent
      },
      {
        title: 'Vertical Pills',
        anchor: 'tabs-vertical-pills-ex',
        outlet: DemoTabsVerticalPillsComponent
      },
      {
        title: 'Justified',
        anchor: 'tabs-justified-ex',
        outlet: DemoTabsJustifiedComponent
      },
      {
        title: 'Custom class',
        anchor: 'tabs-custom-class-ex',
        outlet: DemoTabsCustomClassComponent
      },
      {
        title: 'Select event',
        anchor: 'select-event-ex',
        outlet: DemoTabsSelectEventComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'tabs-config-defaults-ex',
        outlet: DemoTabsConfigComponent
      },
      {
        title: 'Custom template',
        anchor: 'tabs-custom-template-ex',
        outlet: DemoTabsCustomComponent
      },
      {
        title: 'Dynamic content rendering',
        anchor: 'dynamic-content-rendering-ex',
        outlet: DynamicContentRenderingComponent
      },
      {
        title: 'Accessibility',
        anchor: 'accessibility-ex',
        outlet: DemoAccessibilityComponent
      },
      {
        title: 'Disable key navigations',
        anchor: 'disable-key-navigations-ex',
        outlet: DemoDisabledKeyNavigationsComponent
      }
    ]
  }
];
