# NgPrint

Directive for printing any HTML element. For Angular 2+.

## Usage

1. Install

`npm install ng-print`

2. Import into main module

```ts
import {NgxPrintModule} from 'ng-print';

@NgModule({

imports: [NgPrintModule]

})
export class AppModule {
}
```
3. Add directive to template

```html
<div #printThis> 
  <!--Element you want to print-->
</div>

<!-- 'printThis' is template reference -->
<button type="button" [elementToPrint]="printThis" ngPrint>Print table</button>
```

This directive create `iframe` on bottom of document and copy all html head into it, so the styles in your angular app are imported into iframe.

Printed element looks pretty much the same as in your app.

Created iframe is set to `display:none`.

After print or cancelation, it removes created iframe.


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.
