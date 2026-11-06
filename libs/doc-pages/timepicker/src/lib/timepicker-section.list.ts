// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoTimepickerBasicComponent } from './demos/basic/basic';
import { DemoTimepickerMeridianComponent } from './demos/meridian/meridian';
import { DemoTimepickerCustomMeridianComponent } from './demos/custom-meridian/custom-meridian';
import { DemoTimepickerMinMaxComponent } from './demos/min-max/min-max';
import { DemoTimepickerPlaceholderComponent } from './demos/placeholder/placeholder';
import { DemoTimepickerToggleMinutesSecondsComponent } from './demos/toggle-minutes-seconds/toggle-minutes-seconds';
import { DemoTimepickerDisabledComponent } from './demos/disabled/disabled';
import { DemoTimepickerCustomComponent } from './demos/custom/custom';
import { DemoTimepickerCustomValidationComponent } from './demos/custom-validation/custom-validation';
import { DemoTimepickerDynamicComponent } from './demos/dynamic/dynamic';
import { DemoTimepickerMousewheelComponent } from './demos/mousewheel/mousewheel';
import { DemoTimepickerArrowkeysComponent } from './demos/arrowkeys/arrowkeys';
import { DemoTimepickerEmptyDateComponent } from './demos/empty-date/empty-date';
import { DemoTimepickerConfigComponent } from './demos/config/config';
import { DemoTimepickerReadonlyComponent } from './demos/readonly/readonly';
import { DemoTimepickerSpinnersComponent } from './demos/spinners/spinners';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '@ngx-bootstrap-doc/docs';
import { DemoTimepickerIsValidComponent } from './demos/isvalid/isvalid';
import { DemoTimepickerFormComponent } from './demos/form/form';

import * as rawDemosBasicBasic from './demos/basic/basic?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosFormForm from './demos/form/form?raw' with { loader: 'text' };
import * as rawDemosFormFormHtml from './demos/form/form.html?raw' with { loader: 'text' };
import * as rawDemosMeridianMeridian from './demos/meridian/meridian?raw' with { loader: 'text' };
import * as rawDemosMeridianMeridianHtml from './demos/meridian/meridian.html?raw' with { loader: 'text' };
import * as rawDemosCustomMeridianCustomMeridian from './demos/custom-meridian/custom-meridian?raw' with { loader: 'text' };
import * as rawDemosCustomMeridianCustomMeridianHtml from './demos/custom-meridian/custom-meridian.html?raw' with { loader: 'text' };
import * as rawDemosMinMaxMinMax from './demos/min-max/min-max?raw' with { loader: 'text' };
import * as rawDemosMinMaxMinMaxHtml from './demos/min-max/min-max.html?raw' with { loader: 'text' };
import * as rawDemosToggleMinutesSecondsToggleMinutesSeconds from './demos/toggle-minutes-seconds/toggle-minutes-seconds?raw' with { loader: 'text' };
import * as rawDemosToggleMinutesSecondsToggleMinutesSecondsHtml from './demos/toggle-minutes-seconds/toggle-minutes-seconds.html?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabled from './demos/disabled/disabled?raw' with { loader: 'text' };
import * as rawDemosDisabledDisabledHtml from './demos/disabled/disabled.html?raw' with { loader: 'text' };
import * as rawDemosReadonlyReadonly from './demos/readonly/readonly?raw' with { loader: 'text' };
import * as rawDemosReadonlyReadonlyHtml from './demos/readonly/readonly.html?raw' with { loader: 'text' };
import * as rawDemosCustomCustom from './demos/custom/custom?raw' with { loader: 'text' };
import * as rawDemosCustomCustomHtml from './demos/custom/custom.html?raw' with { loader: 'text' };
import * as rawDemosCustomValidationCustomValidation from './demos/custom-validation/custom-validation?raw' with { loader: 'text' };
import * as rawDemosCustomValidationCustomValidationHtml from './demos/custom-validation/custom-validation.html?raw' with { loader: 'text' };
import * as rawDemosIsvalidIsvalid from './demos/isvalid/isvalid?raw' with { loader: 'text' };
import * as rawDemosIsvalidIsvalidHtml from './demos/isvalid/isvalid.html?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamic from './demos/dynamic/dynamic?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicHtml from './demos/dynamic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosMousewheelMousewheel from './demos/mousewheel/mousewheel?raw' with { loader: 'text' };
import * as rawDemosMousewheelMousewheelHtml from './demos/mousewheel/mousewheel.html?raw' with { loader: 'text' };
import * as rawDemosEmptyDateEmptyDate from './demos/empty-date/empty-date?raw' with { loader: 'text' };
import * as rawDemosEmptyDateEmptyDateHtml from './demos/empty-date/empty-date.html?raw' with { loader: 'text' };
import * as rawDemosArrowkeysArrowkeys from './demos/arrowkeys/arrowkeys?raw' with { loader: 'text' };
import * as rawDemosArrowkeysArrowkeysHtml from './demos/arrowkeys/arrowkeys.html?raw' with { loader: 'text' };
import * as rawDemosSpinnersSpinners from './demos/spinners/spinners?raw' with { loader: 'text' };
import * as rawDemosSpinnersSpinnersHtml from './demos/spinners/spinners.html?raw' with { loader: 'text' };
import * as rawDemosPlaceholderPlaceholder from './demos/placeholder/placeholder?raw' with { loader: 'text' };
import * as rawDemosPlaceholderPlaceholderHtml from './demos/placeholder/placeholder.html?raw' with { loader: 'text' };
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
        anchor: 'basic',
        component: rawDemosBasicBasic,
        html: rawDemosBasicBasicHtml,
        outlet: DemoTimepickerBasicComponent
      },
      {
        title: 'Form',
        anchor: 'form',
        component: rawDemosFormForm,
        html: rawDemosFormFormHtml,
        outlet: DemoTimepickerFormComponent
      },
      {
        title: 'Meridian',
        anchor: 'meridian',
        component: rawDemosMeridianMeridian,
        html: rawDemosMeridianMeridianHtml,
        outlet: DemoTimepickerMeridianComponent
      },
      {
        title: 'Custom meridian',
        anchor: 'custom-meridian',
        component: rawDemosCustomMeridianCustomMeridian,
        html: rawDemosCustomMeridianCustomMeridianHtml,
        description: `<p>Text in meridian labels can be customized by using <code>meridians</code> input property</p>`,
        outlet: DemoTimepickerCustomMeridianComponent
      },
      {
        title: 'Min - Max',
        anchor: 'min-max',
        component: rawDemosMinMaxMinMax,
        html: rawDemosMinMaxMinMaxHtml,
        outlet: DemoTimepickerMinMaxComponent
      },
      {
        title: 'Toggle minutes/seconds',
        anchor: 'toggleMinutesSeconds',
        component: rawDemosToggleMinutesSecondsToggleMinutesSeconds,
        html: rawDemosToggleMinutesSecondsToggleMinutesSecondsHtml,
        outlet: DemoTimepickerToggleMinutesSecondsComponent
      },
      {
        title: 'Disabled',
        anchor: 'disabled',
        component: rawDemosDisabledDisabled,
        html: rawDemosDisabledDisabledHtml,
        outlet: DemoTimepickerDisabledComponent
      },
      {
        title: 'Readonly',
        anchor: 'readonly',
        component: rawDemosReadonlyReadonly,
        html: rawDemosReadonlyReadonlyHtml,
        outlet: DemoTimepickerReadonlyComponent
      },
      {
        title: 'Custom steps',
        anchor: 'custom',
        component: rawDemosCustomCustom,
        html: rawDemosCustomCustomHtml,
        outlet: DemoTimepickerCustomComponent
      },
      {
        title: 'Custom validation',
        anchor: 'custom-validation',
        component: rawDemosCustomValidationCustomValidation,
        html: rawDemosCustomValidationCustomValidationHtml,
        outlet: DemoTimepickerCustomValidationComponent
      },
      {
        title: 'Custom validation with isValid event',
        anchor: 'isvalid',
        component: rawDemosIsvalidIsvalid,
        html: rawDemosIsvalidIsvalidHtml,
        description: `<p><code>isValid</code> event emits true if a value is a valid data.
            Enter an invalid data to see error</p>`,
        outlet: DemoTimepickerIsValidComponent
      },
      {
        title: 'Dynamic',
        anchor: 'dynamic',
        component: rawDemosDynamicDynamic,
        html: rawDemosDynamicDynamicHtml,
        outlet: DemoTimepickerDynamicComponent
      },
      {
        title: 'Mouse wheel',
        anchor: 'mouse-wheel',
        component: rawDemosMousewheelMousewheel,
        html: rawDemosMousewheelMousewheelHtml,
        outlet: DemoTimepickerMousewheelComponent
      },
      {
        title: 'Empty date',
        anchor: 'empty-date',
        component: rawDemosEmptyDateEmptyDate,
        html: rawDemosEmptyDateEmptyDateHtml,
        outlet: DemoTimepickerEmptyDateComponent
      },
      {
        title: 'Arrow keys',
        anchor: 'arrow keys',
        component: rawDemosArrowkeysArrowkeys,
        html: rawDemosArrowkeysArrowkeysHtml,
        outlet: DemoTimepickerArrowkeysComponent
      },
      {
        title: 'Spinners',
        anchor: 'spinners',
        component: rawDemosSpinnersSpinners,
        html: rawDemosSpinnersSpinnersHtml,
        outlet: DemoTimepickerSpinnersComponent
      },
      {
        title: 'Placeholder',
        anchor: 'placeholder',
        component: rawDemosPlaceholderPlaceholder,
        html: rawDemosPlaceholderPlaceholderHtml,
        outlet: DemoTimepickerPlaceholderComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults',
        component: rawDemosConfigConfig,
        html: rawDemosConfigConfigHtml,
        outlet: DemoTimepickerConfigComponent
      }
    ]
  },
  {
    name: 'Installation',
    anchor: 'api-reference',
    tabName: 'api',
    outlet: ApiSectionsComponent,
    usage: rawDocsUsageMd,
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">timepicker</span>',
    content: [
      {
        title: 'TimepickerComponent',
        anchor: 'timepicker-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'TimepickerConfig',
        anchor: 'timepicker-config',
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
        outlet: DemoTimepickerBasicComponent
      },
      {
        title: 'Form',
        anchor: 'form-ex',
        outlet: DemoTimepickerFormComponent
      },
      {
        title: 'Meridian',
        anchor: 'meridian-ex',
        outlet: DemoTimepickerMeridianComponent
      },
      {
        title: 'Custom meridian',
        anchor: 'custom-meridian-ex',
        outlet: DemoTimepickerCustomMeridianComponent
      },
      {
        title: 'Min - Max',
        anchor: 'min-max-ex',
        outlet: DemoTimepickerMinMaxComponent
      },
      {
        title: 'Toggle minutes/seconds',
        anchor: 'toggleMinutesSeconds-ex',
        outlet: DemoTimepickerToggleMinutesSecondsComponent
      },
      {
        title: 'Disabled',
        anchor: 'disabled-ex',
        outlet: DemoTimepickerDisabledComponent
      },
      {
        title: 'Readonly',
        anchor: 'readonly-ex',
        outlet: DemoTimepickerReadonlyComponent
      },
      {
        title: 'Custom steps',
        anchor: 'custom-ex',
        outlet: DemoTimepickerCustomComponent
      },
      {
        title: 'Custom validation',
        anchor: 'custom-validation-ex',
        outlet: DemoTimepickerCustomValidationComponent
      },
      {
        title: 'Custom validation with isValid event',
        anchor: 'isvalid-ex',
        outlet: DemoTimepickerIsValidComponent
      },
      {
        title: 'Dynamic',
        anchor: 'dynamic-ex',
        outlet: DemoTimepickerDynamicComponent
      },
      {
        title: 'Mouse wheel',
        anchor: 'mouse-wheel-ex',
        outlet: DemoTimepickerMousewheelComponent
      },
      {
        title: 'Empty date',
        anchor: 'empty-date-ex',
        outlet: DemoTimepickerEmptyDateComponent
      },
      {
        title: 'Arrow keys',
        anchor: 'arrow keys-ex',
        outlet: DemoTimepickerArrowkeysComponent
      },
      {
        title: 'Spinners',
        anchor: 'spinners-ex',
        outlet: DemoTimepickerSpinnersComponent
      },
      {
        title: 'Placeholder',
        anchor: 'placeholder-ex',
        outlet: DemoTimepickerPlaceholderComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults-ex',
        outlet: DemoTimepickerConfigComponent
      }
    ]
  }
];
