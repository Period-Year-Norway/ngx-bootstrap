// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- ambient types for `?raw` source imports
/// <reference path="../../../../../types/raw-imports.d.ts" />
import { DemoCarouseBasicComponent } from './demos/basic/basic';
import { DemoCarouselCaptionsComponent } from './demos/captions/captions';
import { DemoCarouselConfigComponent } from './demos/config/config';
import { DemoCarouselDynamicComponent } from './demos/dynamic/dynamic';
import { DemoCarouselPauseOnHoverComponent } from './demos/pause-on-hover/pause-on-hover';
import { DemoCarouselCustomContentComponent } from './demos/custom-content/custom-content';
import { DemoCarouselIntervalComponent } from './demos/interval/interval';
import { DemoCarouselDisableIndicatorComponent } from './demos/disable-indicator/disable-indicator';
import { DemoCarouselDisableLoopingComponent } from './demos/disable-looping/disable-looping';
import { DemoCarouselSlideChangedEventComponent } from './demos/slide-changed-event/slide-changed-event';
import { DemoCarouselMultilistComponent } from './demos/multilist/multilist';
import { DemoCarouselMultilistSingleOffsetComponent } from './demos/multilist-single-offset/multilist-single-offset';
import { DemoCarouselMultilistFromIndexComponent } from './demos/multilist-from-index/multilist-from-index';
import { DemoCarouselMultilistIndicatorsByChunkComponent } from './demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';

import { ContentSection } from '@ngx-bootstrap-doc/docs';
import { ExamplesComponent } from '@ngx-bootstrap-doc/docs';
import { ApiSectionsComponent } from '@ngx-bootstrap-doc/docs';

import { NgApiDocComponent, NgApiDocConfigComponent } from '@ngx-bootstrap-doc/docs';
import { DemoCarouselPauseOnFocusComponent } from './demos/pause-on-focus/pause-on-focus';
import { DemoCarouseAnimatedComponent } from './demos/animated/animated';

import * as rawDemosBasicBasicTs from './demos/basic/basic.ts?raw' with { loader: 'text' };
import * as rawDemosBasicBasicHtml from './demos/basic/basic.html?raw' with { loader: 'text' };
import * as rawDemosCaptionsCaptionsTs from './demos/captions/captions.ts?raw' with { loader: 'text' };
import * as rawDemosCaptionsCaptionsHtml from './demos/captions/captions.html?raw' with { loader: 'text' };
import * as rawDemosConfigConfigTs from './demos/config/config.ts?raw' with { loader: 'text' };
import * as rawDemosConfigConfigHtml from './demos/config/config.html?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicTs from './demos/dynamic/dynamic.ts?raw' with { loader: 'text' };
import * as rawDemosDynamicDynamicHtml from './demos/dynamic/dynamic.html?raw' with { loader: 'text' };
import * as rawDemosPauseOnHoverPauseOnHoverTs from './demos/pause-on-hover/pause-on-hover.ts?raw' with { loader: 'text' };
import * as rawDemosPauseOnHoverPauseOnHoverHtml from './demos/pause-on-hover/pause-on-hover.html?raw' with { loader: 'text' };
import * as rawDemosPauseOnFocusPauseOnFocusTs from './demos/pause-on-focus/pause-on-focus.ts?raw' with { loader: 'text' };
import * as rawDemosPauseOnFocusPauseOnFocusHtml from './demos/pause-on-focus/pause-on-focus.html?raw' with { loader: 'text' };
import * as rawDemosCustomContentCustomContentTs from './demos/custom-content/custom-content.ts?raw' with { loader: 'text' };
import * as rawDemosCustomContentCustomContentHtml from './demos/custom-content/custom-content.html?raw' with { loader: 'text' };
import * as rawDemosDisableLoopingDisableLoopingTs from './demos/disable-looping/disable-looping.ts?raw' with { loader: 'text' };
import * as rawDemosDisableLoopingDisableLoopingHtml from './demos/disable-looping/disable-looping.html?raw' with { loader: 'text' };
import * as rawDemosDisableIndicatorDisableIndicatorTs from './demos/disable-indicator/disable-indicator.ts?raw' with { loader: 'text' };
import * as rawDemosDisableIndicatorDisableIndicatorHtml from './demos/disable-indicator/disable-indicator.html?raw' with { loader: 'text' };
import * as rawDemosIntervalIntervalTs from './demos/interval/interval.ts?raw' with { loader: 'text' };
import * as rawDemosIntervalIntervalHtml from './demos/interval/interval.html?raw' with { loader: 'text' };
import * as rawDemosSlideChangedEventSlideChangedEventTs from './demos/slide-changed-event/slide-changed-event.ts?raw' with { loader: 'text' };
import * as rawDemosSlideChangedEventSlideChangedEventHtml from './demos/slide-changed-event/slide-changed-event.html?raw' with { loader: 'text' };
import * as rawDemosMultilistMultilistTs from './demos/multilist/multilist.ts?raw' with { loader: 'text' };
import * as rawDemosMultilistMultilistHtml from './demos/multilist/multilist.html?raw' with { loader: 'text' };
import * as rawDemosMultilistSingleOffsetMultilistSingleOffsetTs from './demos/multilist-single-offset/multilist-single-offset.ts?raw' with { loader: 'text' };
import * as rawDemosMultilistSingleOffsetMultilistSingleOffsetHtml from './demos/multilist-single-offset/multilist-single-offset.html?raw' with { loader: 'text' };
import * as rawDemosMultilistFromIndexMultilistFromIndexTs from './demos/multilist-from-index/multilist-from-index.ts?raw' with { loader: 'text' };
import * as rawDemosMultilistFromIndexMultilistFromIndexHtml from './demos/multilist-from-index/multilist-from-index.html?raw' with { loader: 'text' };
import * as rawDemosMultilistIndicatorsByChunkMultilistIndicatorsByChunkTs from './demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.ts?raw' with { loader: 'text' };
import * as rawDemosMultilistIndicatorsByChunkMultilistIndicatorsByChunkHtml from './demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.html?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimatedTs from './demos/animated/animated.ts?raw' with { loader: 'text' };
import * as rawDemosAnimatedAnimatedHtml from './demos/animated/animated.html?raw' with { loader: 'text' };
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
        outlet: DemoCarouseBasicComponent
      },
      {
        title: 'Optional captions',
        anchor: 'captions',
        description: `<p>Add captions to your slides easily with the <code>.carousel-caption</code>
          element within any <code>&lt;slide></code>. Place just about any optional HTML within there
          and it will be automatically aligned and formatted.</p>`,
        component: rawDemosCaptionsCaptionsTs,
        html: rawDemosCaptionsCaptionsHtml,
        outlet: DemoCarouselCaptionsComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults',
        component: rawDemosConfigConfigTs,
        html: rawDemosConfigConfigHtml,
        outlet: DemoCarouselConfigComponent
      },
      {
        title: 'Dynamic Slides',
        anchor: 'dynamic-slides',
        component: rawDemosDynamicDynamicTs,
        html: rawDemosDynamicDynamicHtml,
        outlet: DemoCarouselDynamicComponent
      },
      {
        title: 'Pause on hover',
        anchor: 'pause-on-hover',
        description: `<p>If <code>noPause</code> is set to <code>false</code>
          , carousel autoplay will be stopped when carousel receives hover.</p>`,
        component: rawDemosPauseOnHoverPauseOnHoverTs,
        html: rawDemosPauseOnHoverPauseOnHoverHtml,
        outlet: DemoCarouselPauseOnHoverComponent
      },
      {
        title: 'Pause on focus',
        anchor: 'pause-on-focus',
        description: `<p>If <code>pauseOnFocus</code> is set to <code>true</code>
          , carousel autoplay will be stopped when carousel receives focus.</p>`,
        component: rawDemosPauseOnFocusPauseOnFocusTs,
        html: rawDemosPauseOnFocusPauseOnFocusHtml,
        outlet: DemoCarouselPauseOnFocusComponent
      },
      {
        title: 'Custom content',
        anchor: 'custom-content',
        component: rawDemosCustomContentCustomContentTs,
        html: rawDemosCustomContentCustomContentHtml,
        outlet: DemoCarouselCustomContentComponent
      },
      {
        title: 'Disable slide looping',
        anchor: 'disable-looping',
        component: rawDemosDisableLoopingDisableLoopingTs,
        html: rawDemosDisableLoopingDisableLoopingHtml,
        outlet: DemoCarouselDisableLoopingComponent
      },
      {
        title: 'Disable indicator',
        anchor: 'disable-indicator',
        component: rawDemosDisableIndicatorDisableIndicatorTs,
        html: rawDemosDisableIndicatorDisableIndicatorHtml,
        outlet: DemoCarouselDisableIndicatorComponent
      },
      {
        title: 'Interval',
        anchor: 'slides-interval',
        component: rawDemosIntervalIntervalTs,
        html: rawDemosIntervalIntervalHtml,
        outlet: DemoCarouselIntervalComponent
      },
      {
        title: 'Slide changed event',
        anchor: 'slide-changed-event',
        component: rawDemosSlideChangedEventSlideChangedEventTs,
        html: rawDemosSlideChangedEventSlideChangedEventHtml,
        outlet: DemoCarouselSlideChangedEventComponent
      },
      {
        title: 'Multilist',
        anchor: 'multilist',
        component: rawDemosMultilistMultilistTs,
        html: rawDemosMultilistMultilistHtml,
        outlet: DemoCarouselMultilistComponent
      },
      {
        title: 'Multilist Single Offset',
        anchor: 'multilist-single-offset',
        component: rawDemosMultilistSingleOffsetMultilistSingleOffsetTs,
        html: rawDemosMultilistSingleOffsetMultilistSingleOffsetHtml,
        outlet: DemoCarouselMultilistSingleOffsetComponent
      },
      {
        title: 'Multilist Start From Index',
        anchor: 'multilist-from-index',
        component: rawDemosMultilistFromIndexMultilistFromIndexTs,
        html: rawDemosMultilistFromIndexMultilistFromIndexHtml,
        outlet: DemoCarouselMultilistFromIndexComponent
      },
      {
        title: 'Multilist Indicators By Chunk',
        anchor: 'multilist-indicators-by-chunk',
        component: rawDemosMultilistIndicatorsByChunkMultilistIndicatorsByChunkTs,
        html: rawDemosMultilistIndicatorsByChunkMultilistIndicatorsByChunkHtml,
        outlet: DemoCarouselMultilistIndicatorsByChunkComponent
      },
      {
        title: 'With animation',
        anchor: 'animated',
        component: rawDemosAnimatedAnimatedTs,
        html: rawDemosAnimatedAnimatedHtml,
        outlet: DemoCarouseAnimatedComponent
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
    importInfo: '<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">carousel</span>',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'CarouselComponent',
        anchor: 'carousel-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'SlideComponent',
        anchor: 'slide-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'CarouselConfig',
        anchor: 'carousel-config',
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
        outlet: DemoCarouseBasicComponent
      },
      {
        title: 'Optional captions',
        anchor: 'captions-ex',
        outlet: DemoCarouselCaptionsComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'config-defaults-ex',
        outlet: DemoCarouselConfigComponent
      },
      {
        title: 'Dynamic Slides',
        anchor: 'dynamic-slides-ex',
        outlet: DemoCarouselDynamicComponent
      },
      {
        title: 'Pause on hover',
        anchor: 'pause-on-hover-ex',
        outlet: DemoCarouselPauseOnHoverComponent
      },
      {
        title: 'Pause on focus',
        anchor: 'pause-on-focus-ex',
        outlet: DemoCarouselPauseOnFocusComponent
      },
      {
        title: 'Custom content',
        anchor: 'custom-content-ex',
        outlet: DemoCarouselCustomContentComponent
      },
      {
        title: 'Disable slide looping',
        anchor: 'disable-looping-ex',
        outlet: DemoCarouselDisableLoopingComponent
      },
      {
        title: 'Disable indicator',
        anchor: 'disable-indicator-ex',
        outlet: DemoCarouselDisableIndicatorComponent
      },
      {
        title: 'Interval',
        anchor: 'slides-interval-ex',
        outlet: DemoCarouselIntervalComponent
      },
      {
        title: 'Slide changed event',
        anchor: 'slide-changed-event-ex',
        outlet: DemoCarouselSlideChangedEventComponent
      },
      {
        title: 'Multilist',
        anchor: 'multilist-ex',
        outlet: DemoCarouselMultilistComponent
      },
      {
        title: 'Multilist Single Offset',
        anchor: 'multilist-single-offset-ex',
        outlet: DemoCarouselMultilistSingleOffsetComponent
      },
      {
        title: 'Multilist Start From Index',
        anchor: 'multilist-from-index-ex',
        outlet: DemoCarouselMultilistFromIndexComponent
      },
      {
        title: 'Multilist Indicators By Chunk',
        anchor: 'multilist-indicators-by-chunk-ex',
        outlet: DemoCarouselMultilistIndicatorsByChunkComponent
      },
      {
        title: 'With animation',
        anchor: 'animated-ex',
        outlet: DemoCarouseAnimatedComponent
      }
    ]
  }
];
