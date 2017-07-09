import { Directive, AfterViewInit, ElementRef } from "@angular/core";
import * as hljs from 'highlight.js';
@Directive({
    selector: 'code[highlight]'
})
export class CodeDirective implements AfterViewInit {
    constructor(private eltRef: ElementRef){}

    ngAfterViewInit() {
        hljs.highlightBlock(this.eltRef.nativeElement);
    }
}