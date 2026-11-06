// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoDropdownBasicComponent } from './demos/basic/basic';
import { DemoDropdownAnchorTriggerComponent } from './demos/anchor-trigger/anchor-trigger';
import { DemoDropdownSplitComponent } from './demos/split/split';
import { DemoDropdownTriggersManualComponent } from './demos/triggers-manual/triggers-manual';
import { DemoDropdownByIsOpenPropComponent } from './demos/trigger-by-isopen-property/trigger-by-isopen-property';
import { DemoDropdownDisabledComponent } from './demos/disabled-menu/disabled-menu';
import { DemoDropdownDisabledItemComponent } from './demos/disabled-item/disabled-item';
import { DemoDropdownAlignmentComponent } from './demos/alignment/menu-alignment';
import { DemoNestedDropdownsComponent } from './demos/nested-dropdowns/nested-dropdowns';
import { DemoDropdownContainerComponent } from './demos/container/container';
import { DemoDropdownDropupComponent } from './demos/dropup/dropup';
import { DemoDropdownMenuDividersComponent } from './demos/menu-dividers/menu-dividers';
import { DemoDropdownConfigComponent } from './demos/config/config';
import { DemoDropdownVisibilityEventsComponent } from './demos/visibility-events/visibility-events';
import { DemoDropdownStateChangeEventComponent } from './demos/state-change-event/state-change-event';
import { DemoDropdownAutoCloseComponent } from './demos/autoclose/autoclose';
import { DemoDropdownCustomHtmlComponent } from './demos/custom-html/custom-html';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';
import { DemoDropdownInsideClickComponent } from './demos/inside-click/inside-click';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';

import { DemoDropdownAnimatedComponent } from './demos/animated/animated';

import * as rawDemosBasicBasicTs from './demos/basic/basic.ts?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimated from './demos/animated/animated?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimatedHtml from './demos/animated/animated.html?raw' with { loader: 'text' };
import * as rawDemosAnchorTriggerAnchorTriggerTs from './demos/anchor-trigger/anchor-trigger.ts?raw' with { loader: 'text' };
import * as rawDemosAnchorTriggerAnchorTriggerHtml from './demos/anchor-trigger/anchor-trigger.html?raw' with { loader: 'text' };
import * as rawDemosSplitSplitTs from './demos/split/split.ts?raw' with { loader: 'text' };
import * as rawDemosSplitSplitHtml from './demos/split/split.html?raw' with { loader: 'text' };
import * as rawDemosTriggersManualTriggersManualTs from './demos/triggers-manual/triggers-manual.ts?raw' with { loader: 'text' };
import * as rawDemosTriggersManualTriggersManualHtml from './demos/triggers-manual/triggers-manual.html?raw' with { loader: 'text' };
import * as rawDemosTriggerByIsopenPropertyTriggerByIsopenPropertyTs from './demos/trigger-by-isopen-property/trigger-by-isopen-property.ts?raw' with { loader: 'text' };
import * as rawDemosTriggerByIsopenPropertyTriggerByIsopenPropertyHtml from './demos/trigger-by-isopen-property/trigger-by-isopen-property.html?raw' with { loader: 'text' };
import * as rawDemosDisabledMenuDisabledMenuTs from './demos/disabled-menu/disabled-menu.ts?raw' with { loader: 'text' };
import * as rawDemosDisabledMenuDisabledMenuHtml from './demos/disabled-menu/disabled-menu.html?raw' with { loader: 'text' };
import * as rawDemosDisabledItemDisabledItemTs from './demos/disabled-item/disabled-item.ts?raw' with { loader: 'text' };
import * as rawDemosDisabledItemDisabledItemHtml from './demos/disabled-item/disabled-item.html?raw' with { loader: 'text' };
import * as rawDemosAlignmentMenuAlignmentTs from './demos/alignment/menu-alignment.ts?raw' with { loader: 'text' };
import * as rawDemosAlignmentMenuAlignmentHtml from './demos/alignment/menu-alignment.html?raw' with { loader: 'text' };
import * as rawDemosInsideClickInsideClickTs from './demos/inside-click/inside-click.ts?raw' with { loader: 'text' };
import * as rawDemosInsideClickInsideClickHtml from './demos/inside-click/inside-click.html?raw' with { loader: 'text' };
import * as rawDemosNestedDropdownsNestedDropdownsTs from './demos/nested-dropdowns/nested-dropdowns.ts?raw' with { loader: 'text' };
import * as rawDemosNestedDropdownsNestedDropdownsHtml from './demos/nested-dropdowns/nested-dropdowns.html?raw' with { loader: 'text' };
import * as rawDemosContainerContainerTs from './demos/container/container.ts?raw' with { loader: 'text' };
import * as rawDemosContainerContainerHtml from './demos/container/container.html?raw' with { loader: 'text' };
import * as rawDemosKeyboardKeyboardTs from './demos/keyboard/keyboard.ts?raw' with { loader: 'text' };
import * as rawDemosKeyboardKeyboardHtml from './demos/keyboard/keyboard.html?raw' with { loader: 'text' };
import * as rawDemosDropupDropupTs from './demos/dropup/dropup.ts?raw' with { loader: 'text' };
import * as rawDemosDropupDropupHtml from './demos/dropup/dropup.html?raw' with { loader: 'text' };
import * as rawDemosMenuDividersMenuDividersTs from './demos/menu-dividers/menu-dividers.ts?raw' with { loader: 'text' };
import * as rawDemosMenuDividersMenuDividersHtml from './demos/menu-dividers/menu-dividers.html?raw' with { loader: 'text' };
import * as rawDemosCustomHtmlCustomHtmlTs from './demos/custom-html/custom-html.ts?raw' with { loader: 'text' };
import * as rawDemosCustomHtmlCustomHtmlHtml from './demos/custom-html/custom-html.html?raw' with { loader: 'text' };
import * as rawDemosConfigConfigTs from './demos/config/config.ts?raw' with { loader: 'text' };
import * as rawDemosConfigConfigHtml from './demos/config/config.html?raw' with { loader: 'text' };
import * as rawDemosVisibilityEventsVisibilityEventsTs from './demos/visibility-events/visibility-events.ts?raw' with { loader: 'text' };
import * as rawDemosVisibilityEventsVisibilityEventsHtml from './demos/visibility-events/visibility-events.html?raw' with { loader: 'text' };
import * as rawDemosStateChangeEventStateChangeEventTs from './demos/state-change-event/state-change-event.ts?raw' with { loader: 'text' };
import * as rawDemosStateChangeEventStateChangeEventHtml from './demos/state-change-event/state-change-event.html?raw' with { loader: 'text' };
import * as rawDemosAutocloseAutocloseTs from './demos/autoclose/autoclose.ts?raw' with { loader: 'text' };
import * as rawDemosAutocloseAutocloseHtml from './demos/autoclose/autoclose.html?raw' with { loader: 'text' };
import * as rawDocsUsageMd from './docs/usage.md?raw' with { loader: 'text' };


export const demoComponentContent: ContentSection[] = [
  {
    name: 'Overview',
    anchor: 'overview',
    tabName: 'overview',
    outlet: ExamplesComponent,
    description: `<p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within
      <code>dropdown</code>. Dropdowns can be triggered from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code>
      elements to better fit your potential needs.</p>`,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: rawDemosBasicBasicTs,
        html: rawDemosBasicBasicHtml,
        description: `<p>Any <code>&lt;button&gt;</code> can became a dropdown toggle with few markup changes.
          Here’s how dropdown works with single button</p>`,
        outlet: DemoDropdownBasicComponent
      },
      {
        title: 'With animation',
        anchor: 'animated',
        component: rawDemosAnimatedAnimated,
        html: rawDemosAnimatedAnimatedHtml,
        description: `You can enable animation via <code>isAnimated</code> input or config option`,
        outlet: DemoDropdownAnimatedComponent
      },
      {
        title: 'Trigger by tag <a>',
        anchor: 'anchor-trigger',
        component: rawDemosAnchorTriggerAnchorTriggerTs,
        html: rawDemosAnchorTriggerAnchorTriggerHtml,
        outlet: DemoDropdownAnchorTriggerComponent
      },
      {
        title: 'Split button dropdowns',
        anchor: 'split-button',
        component: rawDemosSplitSplitTs,
        html: rawDemosSplitSplitHtml,
        description: `<p>Similarly, create split button dropdowns with virtually the same markup as single
          button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing
          around the dropdown caret.</p>`,
        outlet: DemoDropdownSplitComponent
      },
      {
        title: 'Manual triggering',
        anchor: 'triggers-manual',
        component: rawDemosTriggersManualTriggersManualTs,
        html: rawDemosTriggersManualTriggersManualHtml,
        description: `<p>Dropdown can be triggered by <code>show</code>, <code>hide</code> and
          <code>toggle</code> methods from directive
          <br>
          Use method <code>toggle(true)</code> if you want to toggle the dropdown or <code>toggle(false)</code>
          if you want to only close opened dropdown.
          </p>`,
        outlet: DemoDropdownTriggersManualComponent
      },
      {
        title: 'Trigger by isOpen property',
        anchor: 'trigger-by-isopen-property',
        component: rawDemosTriggerByIsopenPropertyTriggerByIsopenPropertyTs,
        html: rawDemosTriggerByIsopenPropertyTriggerByIsopenPropertyHtml,
        description: `<p>Dropdown can be shown or hidden by changing <code>isOpen</code> input property</p>`,
        outlet: DemoDropdownByIsOpenPropComponent
      },
      {
        title: 'Disabled menu',
        anchor: 'disabled-menu',
        component: rawDemosDisabledMenuDisabledMenuTs,
        html: rawDemosDisabledMenuDisabledMenuHtml,
        description: `<p>Use <code>isDisabled</code> property to make dropdown disabled.</p>`,
        outlet: DemoDropdownDisabledComponent
      },
      {
        title: 'Mark item as disabled',
        anchor: 'disabled-item',
        component: rawDemosDisabledItemDisabledItemTs,
        html: rawDemosDisabledItemDisabledItemHtml,
        description: `<p>Add a <code>disabled</code> class to <code>&lt;a&gt;</code> for bootstrap 4 to make it as disabled.</p>
                      <p>Add a <code>disabled</code> class to <code>&lt;li&gt;</code>  for bootstrap 3 to make it as disabled.</p>`,
        outlet: DemoDropdownDisabledItemComponent
      },
      {
        title: 'Menu alignment',
        anchor: 'menu-alignment',
        component: rawDemosAlignmentMenuAlignmentTs,
        html: rawDemosAlignmentMenuAlignmentHtml,
        description: `<p>By default, a dropdown menu is automatically positioned 100% from the top and along
          the left side of its parent. Add class <code>.dropdown-menu-right</code> to a <code>dropdownMenu</code>
          to right align the dropdown menu.</p>`,
        outlet: DemoDropdownAlignmentComponent
      },
      {
        title: 'Inside click',
        anchor: 'inside-click',
        component: rawDemosInsideClickInsideClickTs,
        html: rawDemosInsideClickInsideClickHtml,
        description: `<p>By default, a dropdown menu closes on document click, even if you clicked on an element inside the dropdown.
        Use <code>[insideClick]="true"</code> to allow click inside the dropdown</p>`,
        outlet: DemoDropdownInsideClickComponent
      },
      {
        title: 'Nested dropdowns (experimental)',
        anchor: 'nested-dropdowns',
        component: rawDemosNestedDropdownsNestedDropdownsTs,
        html: rawDemosNestedDropdownsNestedDropdownsHtml,
        outlet: DemoNestedDropdownsComponent
      },
      {
        title: 'Append to body',
        anchor: 'container',
        component: rawDemosContainerContainerTs,
        html: rawDemosContainerContainerHtml,
        description: `<p>Append dropdown to body by adding <code>container="body"</code> to the parent element.</p>`,
        outlet: DemoDropdownContainerComponent
      },
      /* not availavle in bs-dropdown version
      {
        title: 'Single button with keyboard nav',
        anchor: 'dropdown-keyboard',
        component: rawDemosKeyboardKeyboardTs,
        html: rawDemosKeyboardKeyboardHtml,
        outlet: DemoDropdownKeyboardComponent
      },*/
      {
        title: 'Dropup variation',
        anchor: 'dropup',
        component: rawDemosDropupDropupTs,
        html: rawDemosDropupDropupHtml,
        description: `<p>To make dropdown's menu appear above toggle element set <code>dropup</code> property as <code>true</code></p>`,
        outlet: DemoDropdownDropupComponent
      },
      {
        title: 'Menu dividers',
        anchor: 'menu-dividers',
        component: rawDemosMenuDividersMenuDividersTs,
        html: rawDemosMenuDividersMenuDividersHtml,
        description: `<p>Separate groups of related menu items with a <code>.divider</code> for bootstrap 3 and <code>.dropdown-divider</code> for bootstrap 4.</p>`,
        outlet: DemoDropdownMenuDividersComponent
      },
      {
        title: 'Custom html',
        anchor: 'custom-html',
        component: rawDemosCustomHtmlCustomHtmlTs,
        html: rawDemosCustomHtmlCustomHtmlHtml,
        description: `<p>Dropdown allows you to use any html markup inside of it</p>`,
        outlet: DemoDropdownCustomHtmlComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults',
        component: rawDemosConfigConfigTs,
        html: rawDemosConfigConfigHtml,
        description: `<p>It is possible to override default dropdown config partially or completely.</p>`,
        outlet: DemoDropdownConfigComponent
      },
      {
        title: 'Visibility Events',
        anchor: 'visibility-events',
        component: rawDemosVisibilityEventsVisibilityEventsTs,
        html: rawDemosVisibilityEventsVisibilityEventsHtml,
        description: `<p>You can subscribe to dropdown's visibility events</p>`,
        outlet: DemoDropdownVisibilityEventsComponent
      },
      {
        title: 'State change event',
        anchor: 'state-change-event',
        component: rawDemosStateChangeEventStateChangeEventTs,
        html: rawDemosStateChangeEventStateChangeEventHtml,
        description: `<p>You can subscribe to dropdown's state change event (<code>isOpenChange</code>).</p>`,
        outlet: DemoDropdownStateChangeEventComponent
      },
      {
        title: 'Auto close',
        anchor: 'autoclose',
        component: rawDemosAutocloseAutocloseTs,
        html: rawDemosAutocloseAutocloseHtml,
        description: `<p>Use <code>autoClose</code> property to change dropdown's default behavior</p>`,
        outlet: DemoDropdownAutoCloseComponent
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
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">dropdowns</span>',
    content: [
      {
        title: 'BsDropdownDirective',
        anchor: 'dropdown-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'BsDropdownContainerComponent',
        anchor: 'dropdown-container',
        outlet: NgApiDocComponent
      },
      {
        title: 'BsDropdownMenuDirective',
        anchor: 'dropdown-menu-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'BsDropdownToggleDirective',
        anchor: 'dropdown-toggle-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'BsDropdownState',
        anchor: 'BsDropdownState',
        outlet: NgApiDocConfigComponent
      },
      {
        title: 'BsDropdownConfig',
        anchor: 'dropdown-config',
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
        outlet: DemoDropdownBasicComponent
      },
      {
        title: 'With animation',
        anchor: 'animated-ex',
        outlet: DemoDropdownAnimatedComponent
      },
      {
        title: 'Trigger by tag <a>',
        anchor: 'anchor-trigger-ex',
        outlet: DemoDropdownAnchorTriggerComponent
      },
      {
        title: 'Split button dropdowns',
        anchor: 'split-button-ex',
        outlet: DemoDropdownSplitComponent
      },
      {
        title: 'Manual triggering',
        anchor: 'triggers-manual-ex',
        outlet: DemoDropdownTriggersManualComponent
      },
      {
        title: 'Trigger by isOpen property',
        anchor: 'trigger-by-isopen-property-ex',
        outlet: DemoDropdownByIsOpenPropComponent
      },
      {
        title: 'Disabled menu',
        anchor: 'disabled-menu-ex',
        outlet: DemoDropdownDisabledComponent
      },
      {
        title: 'Mark item as disabled',
        anchor: 'disabled-item-ex',
        outlet: DemoDropdownDisabledItemComponent
      },
      {
        title: 'Menu alignment',
        anchor: 'menu-alignment-ex',
        outlet: DemoDropdownAlignmentComponent
      },
      {
        title: 'Inside click',
        anchor: 'inside-click-ex',
        outlet: DemoDropdownInsideClickComponent
      },
      {
        title: 'Nested dropdowns (experimental)',
        anchor: 'nested-dropdowns-ex',
        outlet: DemoNestedDropdownsComponent
      },
      {
        title: 'Append to body',
        anchor: 'container-ex',
        outlet: DemoDropdownContainerComponent
      },
      {
        title: 'Dropup variation',
        anchor: 'dropup-ex',
        outlet: DemoDropdownDropupComponent
      },
      {
        title: 'Menu dividers',
        anchor: 'menu-dividers-ex',
        outlet: DemoDropdownMenuDividersComponent
      },
      {
        title: 'Custom html',
        anchor: 'custom-html-ex',
        outlet: DemoDropdownCustomHtmlComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults-ex',
        outlet: DemoDropdownConfigComponent
      },
      {
        title: 'Visibility Events',
        anchor: 'visibility-events-ex',
        outlet: DemoDropdownVisibilityEventsComponent
      },
      {
        title: 'State change event',
        anchor: 'state-change-event-ex',
        outlet: DemoDropdownStateChangeEventComponent
      },
      {
        title: 'Auto close',
        anchor: 'autoclose-ex',
        outlet: DemoDropdownAutoCloseComponent
      }
    ]
  }
];
