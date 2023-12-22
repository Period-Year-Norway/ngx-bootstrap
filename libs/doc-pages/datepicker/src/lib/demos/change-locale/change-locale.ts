import { Component } from '@angular/core';
import { BsLocaleService } from '@period-year-norway/ngx-bootstrap/datepicker';
import { listLocales } from '@period-year-norway/ngx-bootstrap/chronos';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-datepicker-change-locale',
  templateUrl: './change-locale.html'
})
export class DemoDatepickerChangeLocaleComponent {
  locale = 'en';
  locales = listLocales();

  constructor(private localeService: BsLocaleService) {}

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}
