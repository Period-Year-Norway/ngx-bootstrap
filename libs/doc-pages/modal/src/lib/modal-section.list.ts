// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoModalServiceStaticComponent } from './demos/service-template/service-template';
import { DemoModalServiceFromComponent } from './demos/service-component/service-component';
import { DemoModalServiceNestedComponent } from './demos/service-nested/service-nested';
import { DemoModalServiceEventsComponent } from './demos/service-events/service-events';
import { DemoModalServiceDisableAnimationComponent } from './demos/service-options/disable-animation/disable-animation';
import { DemoModalServiceCustomCSSClassComponent } from './demos/service-options/custom-css-class/custom-css-class';
import { DemoModalServiceDisableEscClosingComponent } from './demos/service-options/disable-esc-closing/disable-esc-closing';
import { DemoModalServiceDisableBackdropComponent } from './demos/service-options/disable-backdrop/disable-backdrop';
import { DemoModalServiceConfirmWindowComponent } from './demos/service-confirm-window/service-confirm-window';
import { DemoModalServiceChangeClassComponent } from './demos/service-options/change-class/change-class';

import { DemoModalStaticComponent } from './demos/static/static';
import { DemoModalSizesComponent } from './demos/sizes/sizes';
import { DemoModalChildComponent } from './demos/child/child';
import { DemoModalNestedComponent } from './demos/nested/nested';
import { DemoModalEventsComponent } from './demos/events/events';
import { DemoAutoShownModalComponent } from './demos/auto-shown/auto-shown';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';
import { DemoModalWithPopupsComponent } from './demos/modal-with-popups/modal-with-popups';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocClassComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';
import { DemoModalScrollingLongContentComponent } from './demos/scrolling-long-content/scrolling-long-content';
import { DemoModalRefEventsComponent } from './demos/modal-ref-events/modal-ref-events';
import { DemoModalServiceWithInterceptorComponent } from './demos/service-interceptor/service-interceptor';

import * as rawDemosServiceTemplateServiceTemplateTs from './demos/service-template/service-template.ts?raw' with { loader: 'text' };
import * as rawDemosServiceTemplateServiceTemplateHtml from './demos/service-template/service-template.html?raw' with { loader: 'text' };
import * as rawDemosServiceComponentServiceComponentTs from './demos/service-component/service-component.ts?raw' with { loader: 'text' };
import * as rawDemosServiceComponentServiceComponentHtml from './demos/service-component/service-component.html?raw' with { loader: 'text' };
import * as rawDemosServiceNestedServiceNestedTs from './demos/service-nested/service-nested.ts?raw' with { loader: 'text' };
import * as rawDemosServiceNestedServiceNestedHtml from './demos/service-nested/service-nested.html?raw' with { loader: 'text' };
import * as rawDemosScrollingLongContentScrollingLongContentTs from './demos/scrolling-long-content/scrolling-long-content.ts?raw' with { loader: 'text' };
import * as rawDemosScrollingLongContentScrollingLongContentHtml from './demos/scrolling-long-content/scrolling-long-content.html?raw' with { loader: 'text' };
import * as rawDemosServiceEventsServiceEventsTs from './demos/service-events/service-events.ts?raw' with { loader: 'text' };
import * as rawDemosServiceEventsServiceEventsHtml from './demos/service-events/service-events.html?raw' with { loader: 'text' };
import * as rawDemosModalRefEventsModalRefEventsTs from './demos/modal-ref-events/modal-ref-events.ts?raw' with { loader: 'text' };
import * as rawDemosModalRefEventsModalRefEventsHtml from './demos/modal-ref-events/modal-ref-events.html?raw' with { loader: 'text' };
import * as rawDemosServiceConfirmWindowServiceConfirmWindowTs from './demos/service-confirm-window/service-confirm-window.ts?raw' with { loader: 'text' };
import * as rawDemosServiceConfirmWindowServiceConfirmWindowHtml from './demos/service-confirm-window/service-confirm-window.html?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsCustomCssClassCustomCssClassTs from './demos/service-options/custom-css-class/custom-css-class.ts?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsCustomCssClassCustomCssClassHtml from './demos/service-options/custom-css-class/custom-css-class.html?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsDisableAnimationDisableAnimationTs from './demos/service-options/disable-animation/disable-animation.ts?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsDisableAnimationDisableAnimationHtml from './demos/service-options/disable-animation/disable-animation.html?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsDisableEscClosingDisableEscClosingTs from './demos/service-options/disable-esc-closing/disable-esc-closing.ts?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsDisableEscClosingDisableEscClosingHtml from './demos/service-options/disable-esc-closing/disable-esc-closing.html?raw' with { loader: 'text' };
import * as rawDemosModalWithPopupsModalWithPopupsTs from './demos/modal-with-popups/modal-with-popups.ts?raw' with { loader: 'text' };
import * as rawDemosModalWithPopupsModalWithPopupsHtml from './demos/modal-with-popups/modal-with-popups.html?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsDisableBackdropDisableBackdropTs from './demos/service-options/disable-backdrop/disable-backdrop.ts?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsDisableBackdropDisableBackdropHtml from './demos/service-options/disable-backdrop/disable-backdrop.html?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsChangeClassChangeClassTs from './demos/service-options/change-class/change-class.ts?raw' with { loader: 'text' };
import * as rawDemosServiceOptionsChangeClassChangeClassHtml from './demos/service-options/change-class/change-class.html?raw' with { loader: 'text' };
import * as rawDemosServiceInterceptorServiceInterceptorTs from './demos/service-interceptor/service-interceptor.ts?raw' with { loader: 'text' };
import * as rawDemosServiceInterceptorServiceInterceptorHtml from './demos/service-interceptor/service-interceptor.html?raw' with { loader: 'text' };
import * as rawDemosStaticStaticTs from './demos/static/static.ts?raw' with { loader: 'text' };
import * as rawDemosStaticStaticHtml from './demos/static/static.html?raw' with { loader: 'text' };
import * as rawDemosSizesSizesTs from './demos/sizes/sizes.ts?raw' with { loader: 'text' };
import * as rawDemosSizesSizesHtml from './demos/sizes/sizes.html?raw' with { loader: 'text' };
import * as rawDemosChildChildTs from './demos/child/child.ts?raw' with { loader: 'text' };
import * as rawDemosChildChildHtml from './demos/child/child.html?raw' with { loader: 'text' };
import * as rawDemosNestedNestedTs from './demos/nested/nested.ts?raw' with { loader: 'text' };
import * as rawDemosNestedNestedHtml from './demos/nested/nested.html?raw' with { loader: 'text' };
import * as rawDemosEventsEventsTs from './demos/events/events.ts?raw' with { loader: 'text' };
import * as rawDemosEventsEventsHtml from './demos/events/events.html?raw' with { loader: 'text' };
import * as rawDemosAutoShownAutoShownTs from './demos/auto-shown/auto-shown.ts?raw' with { loader: 'text' };
import * as rawDemosAutoShownAutoShownHtml from './demos/auto-shown/auto-shown.html?raw' with { loader: 'text' };
import * as rawDemosAccessibilityAccessibilityTs from './demos/accessibility/accessibility.ts?raw' with { loader: 'text' };
import * as rawDemosAccessibilityAccessibilityHtml from './demos/accessibility/accessibility.html?raw' with { loader: 'text' };
import * as rawDocsUsageMd from './docs/usage.md?raw' with { loader: 'text' };

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Overview',
    anchor: 'overview',
    tabName: 'overview',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Service examples',
        anchor: 'service-section',
        description: `<p>Open a modal from service.</p>
      <p>To be able to open modals from service, inject <code>BsModalService</code> to your constructor.<br>Then, call
      <code>.show()</code> method of modal service. Pass a <code>TemplateRef</code> or a component as a first argument and
      config as a second (optionally). <br> <code>.show()</code> method returns an instance of <code>BsModalRef</code>
      class with <code>.hide()</code> method and <code>content</code> property where you'll find a component
      which you've passed to service.</p>`
      },
      {
        title: 'Template',
        anchor: 'service-template',
        component: rawDemosServiceTemplateServiceTemplateTs,
        html: rawDemosServiceTemplateServiceTemplateHtml,
        outlet: DemoModalServiceStaticComponent
      },
      {
        title: 'Component',
        anchor: 'service-component',
        component: rawDemosServiceComponentServiceComponentTs,
        html: rawDemosServiceComponentServiceComponentHtml,
        description: `<p>Creating a modal with component just as easy as it is with template. Just pass your component
          in <code>.show()</code> method as in example, and don't forget to include your component to
          <code>entryComponents</code> of your <code>NgModule</code><br> If you passed a component
          to <code>.show()</code> you can get access to opened modal by injecting <code>BsModalRef</code>. Also you can pass data
          in your modal by adding <code>initialState</code> field in config. See example for more info</p>`,
        outlet: DemoModalServiceFromComponent
      },
      {
        title: 'Nested',
        anchor: 'service-nested',
        component: rawDemosServiceNestedServiceNestedTs,
        html: rawDemosServiceNestedServiceNestedHtml,
        description: `<p>Nested modals are supported</p>`,
        outlet: DemoModalServiceNestedComponent
      },
      {
        title: 'Scrolling long content',
        anchor: 'scrolling-long-content',
        component: rawDemosScrollingLongContentScrollingLongContentTs,
        html: rawDemosScrollingLongContentScrollingLongContentHtml,
        outlet: DemoModalScrollingLongContentComponent
      },
      {
        title: 'Events',
        anchor: 'service-events',
        component: rawDemosServiceEventsServiceEventsTs,
        html: rawDemosServiceEventsServiceEventsHtml,
        description: `
          <p>Modal service events. Modal service exposes 4 events: <code>onShow</code>, <code>onShown</code>,
          <code>onHide</code>, <code>onHidden</code>.
          See usage example below.</p>
          <p><code>onHide</code> and <code>onHidden</code> events emit dismiss reason. Possible values are
          <code>backdrop-click</code>, <code>esc</code> or <code>{id: number | string}</code> if modal was closed by direct call of
          <code>hide()</code> method</p>`,
        outlet: DemoModalServiceEventsComponent
      },
      {
        title: 'ModalRef Events',
        anchor: 'modal-ref-events',
        component: rawDemosModalRefEventsModalRefEventsTs,
        html: rawDemosModalRefEventsModalRefEventsHtml,
        description: `
          <p>Modal ref events. ModalRef exposes 2 events: <code>onHide</code> and <code>onHidden</code>. Note,
          <code>onShow</code> and <code>onShown</code> are not options because they have already fired by the time
          the ModalRef is created.
          See usage example below.</p>
          <p><code>onHide</code> and <code>onHidden</code> events emit dismiss reason. Possible values are
          <code>backdrop-click</code>, <code>esc</code> or <code>{id: number | string}</code> if modal was closed by direct call of
          <code>hide()</code> method</p>`,
        outlet: DemoModalRefEventsComponent
      },
      {
        title: 'Confirm Window',
        anchor: 'confirm-window',
        component: rawDemosServiceConfirmWindowServiceConfirmWindowTs,
        html: rawDemosServiceConfirmWindowServiceConfirmWindowHtml,
        description: `<p>Modal with opportunity to <code>confirm</code> or <code>decline</code>.</p>`,
        outlet: DemoModalServiceConfirmWindowComponent
      },
      {
        title: 'Сustom css class',
        anchor: 'service-custom-css-class',
        component: rawDemosServiceOptionsCustomCssClassCustomCssClassTs,
        html: rawDemosServiceOptionsCustomCssClassCustomCssClassHtml,
        description: `<p>There is possibility to add custom css class to a modal.
          See the demo below to learn how to use it</p>`,
        outlet: DemoModalServiceCustomCSSClassComponent
      },
      {
        title: 'Animation option',
        anchor: 'service-disable-animation',
        component: rawDemosServiceOptionsDisableAnimationDisableAnimationTs,
        html: rawDemosServiceOptionsDisableAnimationDisableAnimationHtml,
        description: `<p>There is animation option that you can configure.</p>`,
        outlet: DemoModalServiceDisableAnimationComponent
      },
      {
        title: 'Esc closing option',
        anchor: 'service-disable-esc-closing',
        component: rawDemosServiceOptionsDisableEscClosingDisableEscClosingTs,
        html: rawDemosServiceOptionsDisableEscClosingDisableEscClosingHtml,
        description: `<p>There is closing by Esc button option that you can configure.</p>`,
        outlet: DemoModalServiceDisableEscClosingComponent
      },
      {
        title: 'Modal window with tooltip and popover',
        anchor: 'modal-with-popups',
        component: rawDemosModalWithPopupsModalWithPopupsTs,
        html: rawDemosModalWithPopupsModalWithPopupsHtml,
        description: `<p><code>Tooltips</code> and <code>popovers</code> can be placed within modals as needed. When modals are closed, any <code>tooltips</code> and <code>popovers</code> within are also automatically dismissed.</p>`,
        outlet: DemoModalWithPopupsComponent
      },
      {
        title: 'Backdrop options',
        anchor: 'service-disable-backdrop',
        component: rawDemosServiceOptionsDisableBackdropDisableBackdropTs,
        html: rawDemosServiceOptionsDisableBackdropDisableBackdropHtml,
        description: `<p>There is backdrop options that you can configure.</p>`,
        outlet: DemoModalServiceDisableBackdropComponent
      },
      {
        title: 'Change class',
        anchor: 'change-class',
        component: rawDemosServiceOptionsChangeClassChangeClassTs,
        html: rawDemosServiceOptionsChangeClassChangeClassHtml,
        description: `<p>Calling setClass method to change modal's window class</p>`,
        outlet: DemoModalServiceChangeClassComponent
      },
      {
        title: 'Close interceptor',
        anchor: 'service-with-interceptor',
        component: rawDemosServiceInterceptorServiceInterceptorTs,
        html: rawDemosServiceInterceptorServiceInterceptorHtml,
        description: `<p>When opening a modal with a component, you can provide an interceptor which will be triggered
          whenever the modal try to close, allowing you to block the disappearance of a modal.</p>`,
        outlet: DemoModalServiceWithInterceptorComponent
      },
      {
        title: 'Directive examples',
        anchor: 'directive-section',
        description: `<p>Also you can use directive instead of service. See the demos below </p>`
      },
      {
        title: 'Static modal',
        anchor: 'directive-static',
        component: rawDemosStaticStaticTs,
        html: rawDemosStaticStaticHtml,
        outlet: DemoModalStaticComponent
      },
      {
        title: 'Optional sizes',
        anchor: 'directive-sizes',
        component: rawDemosSizesSizesTs,
        html: rawDemosSizesSizesHtml,
        outlet: DemoModalSizesComponent
      },
      {
        title: 'Child modal',
        anchor: 'directive-child',
        component: rawDemosChildChildTs,
        html: rawDemosChildChildHtml,
        description: `<p>Control modal from parent component</p>`,
        outlet: DemoModalChildComponent
      },
      {
        title: 'Nested modals',
        anchor: 'directive-nested',
        component: rawDemosNestedNestedTs,
        html: rawDemosNestedNestedHtml,
        description: `<p>Open a modal from another modal</p>`,
        outlet: DemoModalNestedComponent
      },
      {
        title: 'Modal events',
        anchor: 'directive-events',
        component: rawDemosEventsEventsTs,
        html: rawDemosEventsEventsHtml,
        description: `<p><code>ModalDirective</code> exposes 4 events: <code>onShow</code>, <code>onShown</code>,
          <code>onHide</code>, <code>onHidden</code>. See usage example below.<br>
          <code>$event</code> is an instance of <code>ModalDirective</code>. There you may
          find some useful properties like <code>isShown</code>, <code>dismissReason</code>, etc.
          <br>For example, you may want to know which one of user's actions caused closing of a modal.
          Just get the value of <code>dismissReason</code>,<br> possible values are <code>backdrop-click</code>,
          <code>esc</code> or <code>null</code> if modal was closed by direct call of <code>hide()</code> method</p>`,
        outlet: DemoModalEventsComponent
      },
      {
        title: 'Auto shown modal',
        anchor: 'directive-auto-shown',
        component: rawDemosAutoShownAutoShownTs,
        html: rawDemosAutoShownAutoShownHtml,
        description: `
          <p>Show modal right after it has been initialized. This allows you to keep DOM clean by only
          appending visible modals to the DOM using <code>*ngIf</code> directive.</p>
          <p>It can also be useful if you want your modal component to perform some initialization operations, but
          want to defer that until user actually sees modal content. I.e. for a "Select e-mail recipient" modal
          you might want to defer recipient list loading until the modal is shown.</p>`,
        outlet: DemoAutoShownModalComponent
      },
      {
        title: 'Accessibility',
        anchor: 'accessibility',
        component: rawDemosAccessibilityAccessibilityTs,
        html: rawDemosAccessibilityAccessibilityHtml,
        description: `
        <p>
          Be sure to add <code class="highlighter-rouge">id=""</code> attribute to your title and description
          in the template to make your modal works according to accessibility. The <code class="highlighter-rouge">aria-labelledby</code>
          attribute establishes relationships between the modal and its title (only if the title has id attribute). The element
          containing the modal's description is referenced by <code class="highlighter-rouge">aria-describedby</code> attribute.
          The dialog does not need <code class="highlighter-rouge">aria-describedby</code> since there is no static
          text that describes it.
        </p>
        <p>
        Use modal options to set <code class="highlighter-rouge">aria-labelledby</code> and
        <code class="highlighter-rouge">aria-describedby</code> attributes.
        </p>
        `,
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
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">modals</span>',
    content: [
      {
        title: 'ModalDirective',
        anchor: 'modal-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'ModalBackdropComponent',
        anchor: 'modal-backdrop-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'BsModalService',
        anchor: 'bs-modal-service',
        outlet: NgApiDocClassComponent
      },
      {
        title: 'BsModalRef',
        anchor: 'bs-modal-ref',
        outlet: NgApiDocClassComponent
      },
      {
        title: 'ModalOptions',
        anchor: 'modal-options',
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
        title: 'Template',
        anchor: 'service-template-ex',
        outlet: DemoModalServiceStaticComponent
      },
      {
        title: 'Component',
        anchor: 'service-component-ex',
        outlet: DemoModalServiceFromComponent
      },
      {
        title: 'Nested',
        anchor: 'service-nested-ex',
        outlet: DemoModalServiceNestedComponent
      },
      {
        title: 'Scrolling long content',
        anchor: 'scrolling-long-content-ex',
        outlet: DemoModalScrollingLongContentComponent
      },
      {
        title: 'Events',
        anchor: 'service-events-ex',
        outlet: DemoModalServiceEventsComponent
      },
      {
        title: 'ModalRef Events',
        anchor: 'modal-ref-events-ex',
        outlet: DemoModalRefEventsComponent
      },
      {
        title: 'Confirm Window',
        anchor: 'confirm-window-ex',
        outlet: DemoModalServiceConfirmWindowComponent
      },
      {
        title: 'Сustom css class',
        anchor: 'service-custom-css-class-ex',
        outlet: DemoModalServiceCustomCSSClassComponent
      },
      {
        title: 'Animation option',
        anchor: 'service-disable-animation-ex',
        outlet: DemoModalServiceDisableAnimationComponent
      },
      {
        title: 'Esc closing option',
        anchor: 'service-disable-esc-closing-ex',
        outlet: DemoModalServiceDisableEscClosingComponent
      },
      {
        title: 'Modal window with tooltip and popover',
        anchor: 'modal-with-popups-ex',
        outlet: DemoModalWithPopupsComponent
      },
      {
        title: 'Backdrop options',
        anchor: 'service-disable-backdrop-ex',
        outlet: DemoModalServiceDisableBackdropComponent
      },
      {
        title: 'Change class',
        anchor: 'change-class-ex',
        outlet: DemoModalServiceChangeClassComponent
      },
      {
        title: 'Close interceptor',
        anchor: 'service-with-interceptor-ex',
        outlet: DemoModalServiceWithInterceptorComponent
      },
      {
        title: 'Static modal',
        anchor: 'directive-static-ex',
        outlet: DemoModalStaticComponent
      },
      {
        title: 'Optional sizes',
        anchor: 'directive-sizes-ex',
        outlet: DemoModalSizesComponent
      },
      {
        title: 'Child modal',
        anchor: 'directive-child-ex',
        outlet: DemoModalChildComponent
      },
      {
        title: 'Nested modals',
        anchor: 'directive-nested-ex',
        outlet: DemoModalNestedComponent
      },
      {
        title: 'Modal events',
        anchor: 'directive-events-ex',
        outlet: DemoModalEventsComponent
      },
      {
        title: 'Auto shown modal',
        anchor: 'directive-auto-shown-ex',
        outlet: DemoAutoShownModalComponent
      }
    ]
  }
];
