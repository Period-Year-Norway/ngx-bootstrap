import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';

import { ComponentLoader, ComponentLoaderFactory } from '@period-year-norway/ngx-bootstrap/component-loader';

import { Subscription } from 'rxjs';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';

import { BsDatepickerConfig } from './bs-datepicker.config';
import { DatepickerDateCustomClasses, DatepickerDateTooltipText } from './models';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import { copyTime } from './utils/copy-time-utils';
import { checkBsValue, setCurrentTimeOnDateSelect } from './utils/bs-calendar-utils';

@Directive({
  selector: 'bs-datepicker-inline',
  exportAs: 'bsDatepickerInline'
})
export class BsDatepickerInlineDirective implements OnInit, OnDestroy, OnChanges {
  /**
   * Config object for datepicker
   */
  @Input() bsConfig?: Partial<BsDatepickerInlineConfig>;
  /**
   * Indicates whether datepicker is enabled or not
   */
  @Input() isDisabled = false;
  /**
   * Minimum date which is available for selection
   */
  @Input() minDate?: Date;
  /**
   * Maximum date which is available for selection
   */
  @Input() maxDate?: Date;
  /**
   * Date custom classes
   */
  @Input() dateCustomClasses?: DatepickerDateCustomClasses[];
  /**
   * Date tooltip text
   */
  @Input() dateTooltipTexts?: DatepickerDateTooltipText[];
  /**
   * Disable specific dates
   */
  @Input() datesEnabled?: Date[];
  /**
   * Enable specific dates
   */
  @Input() datesDisabled?: Date[];
  /**
   * Emits when datepicker value has been changed
   */
  @Output() bsValueChange: EventEmitter<Date> = new EventEmitter();
  protected _subs: Subscription[] = [];
  private readonly _datepicker: ComponentLoader<BsDatepickerInlineContainerComponent>;
  private _datepickerRef?: ComponentRef<BsDatepickerInlineContainerComponent>;

  constructor(
    public _config: BsDatepickerInlineConfig,
    private _elementRef: ElementRef,
    _renderer: Renderer2,
    _viewContainerRef: ViewContainerRef,
    cis: ComponentLoaderFactory
  ) {
    // todo: assign only subset of fields
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader<BsDatepickerInlineContainerComponent>(
      _elementRef,
      _viewContainerRef,
      _renderer
    );
  }

  _bsValue?: Date;

  /**
   * Initial value of datepicker
   */
  @Input()
  set bsValue(value: Date | undefined) {
    if (this._bsValue === value) {
      return;
    }

     if (!this._bsValue && value && !this._config.withTimepicker) {
       const now = new Date();
       copyTime(value, now);
     }

    if (value && this.bsConfig?.initCurrentTime) {
      value = setCurrentTimeOnDateSelect(value);
     }

    this._bsValue = value;
    this.bsValueChange.emit(value);
  }

  ngOnInit(): void {
    this.setConfig();
    this.initSubscribes();
  }

  initSubscribes() {
    this.unsubscribeSubscriptions();
    this._subs.push(
      this.bsValueChange.subscribe((value: Date) => {
        if (this._datepickerRef) {
          this._datepickerRef.instance.value = value;
        }
      })
    );

    if (this._datepickerRef) {
      this._subs.push(
        this._datepickerRef.instance.valueChange.subscribe((value: Date) => {
          this.bsValue = value;
        })
      );
    }
  }

  unsubscribeSubscriptions() {
    if (this._subs?.length) {
      this._subs.map(sub => sub.unsubscribe());
      this._subs.length = 0;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["bsConfig"]) {
      if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
        this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
        this.bsValueChange.emit(this._bsValue);
      }
    }

    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }

    if (changes["minDate"]) {
      this._datepickerRef.instance.minDate = this.minDate;
    }

    if (changes["maxDate"]) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }

    if (changes["datesDisabled"]) {
      this._datepickerRef.instance.datesDisabled = this.datesDisabled;
    }

    if (changes["datesEnabled"]) {
      this._datepickerRef.instance.datesEnabled = this.datesEnabled;
      this._datepickerRef.instance.value = this._bsValue;
    }

    if (changes["isDisabled"]) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }

    if (changes["dateCustomClasses"]) {
      this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
    }

    if (changes["dateTooltipTexts"]) {
      this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
    }

    this.setConfig();
  }

  /**
   * Set config for datepicker
   */
  setConfig(): void {
    if (this._datepicker) {
      this._datepicker.hide();
    }

    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
      dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
      datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
      datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
      initCurrentTime: this.bsConfig?.initCurrentTime
    });


    this._datepickerRef = this._datepicker
      .provide({ provide: BsDatepickerConfig, useValue: this._config })
      .attach(BsDatepickerInlineContainerComponent)
      .to(this._elementRef)
      .show();

    this.initSubscribes();
  }

  ngOnDestroy() {
    this._datepicker.dispose();
    this.unsubscribeSubscriptions();
  }
}
