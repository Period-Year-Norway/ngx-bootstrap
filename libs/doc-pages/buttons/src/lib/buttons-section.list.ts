// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoButtonsBasicComponent } from './demos/basic/basic';
import { DemoButtonsCheckboxComponent } from './demos/checkbox/checkbox';
import { DemoButtonsRadioComponent } from './demos/radio/radio';
import { DemoButtonsUncheckableRadioComponent } from './demos/uncheckable-radio/uncheckable-radio';
import { DemoButtonsCheckboxReactiveFormsComponent } from './demos/checkbox-reactiveforms/checkbox-reactiveforms';
import { DemoButtonsRadioReactiveFormsComponent } from './demos/radio-reactiveforms/radio-reactiveforms';
import { DemoButtonsDisabledComponent } from './demos/disabled/disabled';
import { DemoButtonsCustomCheckboxValueComponent } from './demos/custom-checkbox-value/custom-checkbox-value';
import { DemoButtonsRadioWithGroupComponent } from './demos/radio-with-group/radio-with-group';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import { NgApiDocComponent } from '@ngx-bootstrap-doc/docs';

import * as rawDemosBasicBasicTs from './demos/basic/basic.ts?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosCheckboxCheckboxTs from './demos/checkbox/checkbox.ts?raw' with { loader: 'text' };
import * as rawDemosCheckboxCheckboxHtml from './demos/checkbox/checkbox.html?raw' with { loader: 'text' };
import * as rawDemosCustomCheckboxValueCustomCheckboxValueTs from './demos/custom-checkbox-value/custom-checkbox-value.ts?raw' with { loader: 'text' };
import * as rawDemosCustomCheckboxValueCustomCheckboxValueHtml from './demos/custom-checkbox-value/custom-checkbox-value.html?raw' with { loader: 'text' };
import * as rawDemosCheckboxReactiveformsCheckboxReactiveformsTs from './demos/checkbox-reactiveforms/checkbox-reactiveforms.ts?raw' with { loader: 'text' };
import * as rawDemosCheckboxReactiveformsCheckboxReactiveformsHtml from './demos/checkbox-reactiveforms/checkbox-reactiveforms.html?raw' with { loader: 'text' };
import * as rawDemosRadioWithGroupRadioWithGroupTs from './demos/radio-with-group/radio-with-group.ts?raw' with { loader: 'text' };
import * as rawDemosRadioWithGroupRadioWithGroupHtml from './demos/radio-with-group/radio-with-group.html?raw' with { loader: 'text' };
import * as rawDemosRadioRadioTs from './demos/radio/radio.ts?raw' with { loader: 'text' };
import * as rawDemosRadioRadioHtml from './demos/radio/radio.html?raw' with { loader: 'text' };
import * as rawDemosUncheckableRadioUncheckableRadioTs from './demos/uncheckable-radio/uncheckable-radio.ts?raw' with { loader: 'text' };
import * as rawDemosUncheckableRadioUncheckableRadioHtml from './demos/uncheckable-radio/uncheckable-radio.html?raw' with { loader: 'text' };
import * as rawDemosRadioReactiveformsRadioReactiveformsTs from './demos/radio-reactiveforms/radio-reactiveforms.ts?raw' with { loader: 'text' };
import * as rawDemosRadioReactiveformsRadioReactiveformsHtml from './demos/radio-reactiveforms/radio-reactiveforms.html?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledTs from './demos/disabled/disabled.ts?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledHtml from './demos/disabled/disabled.html?raw' with { loader: 'text' };
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
        outlet: DemoButtonsBasicComponent
      },
      {
        title: 'Checkbox',
        anchor: 'checkbox',
        description: `Checkbox-like buttons set with variable states`,
        component: rawDemosCheckboxCheckboxTs,
        html: rawDemosCheckboxCheckboxHtml,
        outlet: DemoButtonsCheckboxComponent
      },
      {
        title: 'Custom checkbox value',
        anchor: 'custom-checkbox-value',
        component: rawDemosCustomCheckboxValueCustomCheckboxValueTs,
        html: rawDemosCustomCheckboxValueCustomCheckboxValueHtml,
        outlet: DemoButtonsCustomCheckboxValueComponent
      },
      {
        title: 'Checkbox with Reactive Forms',
        anchor: 'checkbox-reactiveforms',
        description: `Checkbox buttons with ReactiveForms`,
        component: rawDemosCheckboxReactiveformsCheckboxReactiveformsTs,
        html: rawDemosCheckboxReactiveformsCheckboxReactiveformsHtml,
        outlet: DemoButtonsCheckboxReactiveFormsComponent
      },
      {
        title: 'Radio with radio group',
        anchor: 'radio-button-with-group',
        description: `Radio buttons with checked/unchecked states. Radio buttons used together with a <code>btnRadioGroup</code> can be
used in template driven and reactive forms.
They follow the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton">W3C WAI-AIRA design pattern for radio groups</a>.
Meaning
<ul>
<li>The Radio Group is inserted in the tab-order of the page by automatically adding a tabindex attribute</li>
<li>The selected radio element can be changed with the arrow keys if the focus is in the group</li>
<li>The role of the group is set to "radiogroup" and the aria-checked attributes are added according to the state</li>
</ul>
Individual buttons or the whole group can be marked as disabled.
`,
        component: rawDemosRadioWithGroupRadioWithGroupTs,
        html: rawDemosRadioWithGroupRadioWithGroupHtml,
        outlet: DemoButtonsRadioWithGroupComponent
      },
      {
        title: 'Radio without explicit group',
        anchor: 'radio-button-explicit-group',
        description: ` The second method to create a radio button group is to use the same <code>ngModel</code> binding with several buttons.
 This works only for template driven forms and is not generally advised. But there are use cases were this might be useful, e.g. in tables.
 In terms of accessibility the buttons in the group can not be selected with the arrow keys, but individually reached by using the tab key
 and then be toggled by using the space key. You can check out the demo below.`,
        component: rawDemosRadioRadioTs,
        html: rawDemosRadioRadioHtml,
        outlet: DemoButtonsRadioComponent
      },
      {
        title: 'Uncheckable Radio',
        anchor: 'uncheckable-radio-button',
        component: rawDemosUncheckableRadioUncheckableRadioTs,
        html: rawDemosUncheckableRadioUncheckableRadioHtml,
        outlet: DemoButtonsUncheckableRadioComponent
      },
      {
        title: 'Radio with Reactive Forms',
        anchor: 'radio-reactiveforms',
        description: `Radio buttons with ReactiveForms. Example below shows how to use radio buttons with reactive
 forms. Please be aware that for reactive forms it's required to use <code>btnRadioGroup</code> directive along with
 <code>btnRadio</code>'s`,
        component: rawDemosRadioReactiveformsRadioReactiveformsTs,
        html: rawDemosRadioReactiveformsRadioReactiveformsHtml,
        outlet: DemoButtonsRadioReactiveFormsComponent
      },
      {
        title: 'Disabled Buttons',
        anchor: 'disabled-buttons',
        component: rawDemosDisabledDisabledTs,
        html: rawDemosDisabledDisabledHtml,
        outlet: DemoButtonsDisabledComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> &#45;&#45;component <span class="pln">buttons</span>',
    content: [
      {
        title: 'ButtonCheckboxDirective',
        anchor: 'button-checkbox-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'ButtonRadioDirective',
        anchor: 'button-radio-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'ButtonRadioGroupDirective',
        anchor: 'button-radio-group-directive',
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
        outlet: DemoButtonsBasicComponent
      },
      {
        title: 'Checkbox',
        anchor: 'checkbox-ex',
        outlet: DemoButtonsCheckboxComponent
      },
      {
        title: 'Custom checkbox value',
        anchor: 'custom-checkbox-value-ex',
        outlet: DemoButtonsCustomCheckboxValueComponent
      },
      {
        title: 'Checkbox with Reactive Forms',
        anchor: 'checkbox-reactiveforms-ex',
        outlet: DemoButtonsCheckboxReactiveFormsComponent
      },
      {
        title: 'Radio with radio group',
        anchor: 'radio-button-with-group-ex',
        outlet: DemoButtonsRadioWithGroupComponent
      },
      {
        title: 'Radio without explicit group',
        anchor: 'radio-button-explicit-group-ex',
        outlet: DemoButtonsRadioComponent
      },
      {
        title: 'Uncheckable Radio',
        anchor: 'uncheckable-radio-button-ex',
        outlet: DemoButtonsUncheckableRadioComponent
      },
      {
        title: 'Radio with Reactive Forms',
        anchor: 'radio-reactiveforms-ex',
        outlet: DemoButtonsRadioReactiveFormsComponent
      },
      {
        title: 'Disabled Buttons',
        anchor: 'disabled-buttons-ex',
        outlet: DemoButtonsDisabledComponent
      }
    ]
  }
];
