import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TypeaheadModule } from '@period-year-norway/ngx-bootstrap/typeahead';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    ...
  ]
})
export class AppModule(){}
