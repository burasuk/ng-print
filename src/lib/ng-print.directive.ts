import { Directive, HostListener, Input, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './window.ref';

@Directive({
    selector: "button[ngPrint]"
})
export class NgPrintDirective {

    @Input() elementToPrint: HTMLInputElement;

    constructor(
        @Inject(DOCUMENT) private document: any, 
        @Inject(WINDOW) private window: any
    ) { }

    @HostListener('click')
    public print(): void {

        const x = this.document.getElementsByTagName("head")[0].innerHTML;
        const iframe = this.document.createElement("iframe");
        iframe.style.display='none';

        this.document.body.appendChild(iframe);
        iframe.contentWindow.document.write(x);
        iframe.contentWindow.document.write(
            this.elementToPrint.innerHTML
        );

        setTimeout( () => {
            this.window.frames[0].print();
        }, 500);

        // remove iframe after print or cancelation
        setTimeout( () => {
            var a = this.document.querySelectorAll('iframe');
            a[0].parentNode.removeChild(a[0])
        }, 500);
    }
}