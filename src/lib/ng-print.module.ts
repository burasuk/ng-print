import { NgModule } from '@angular/core';
import { NgPrintDirective } from './ng-print.directive';
import { WINDOW_PROVIDERS } from "./window.ref";


@NgModule({
  declarations: [NgPrintDirective],
  imports: [
  ],
  exports: [NgPrintDirective],
  providers: [ WINDOW_PROVIDERS ]
})
export class NgPrintModule { }
