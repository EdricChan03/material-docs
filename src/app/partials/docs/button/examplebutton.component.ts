import { CodeFiles } from './../../../shared/example-viewer.docs';
import { ButtonTypesExample } from './../../../../assets/examples/button/button-types';
import { ButtonNoRippleExample } from './../../../../assets/examples/button/button-noripple';
import { SharedComponent } from './../../../shared/shared.docs';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'button-docs-examples',
    templateUrl: './examplebutton.component.html'
})

export class DocsExampleBtn implements OnInit {
    disableRipple: CodeFiles;
    buttonTypes: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent) {
        shared.setTitle('Docs > Button > Examples');
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.shared.doScroll();
        });
        this.disableRipple = {
            filePath: [
                'assets/examples/button/button-noripple.html',
                'assets/examples/button/button-noripple.ts'
            ],
            highlightPath: [
                'assets/highlighted/button-noripple-html.html',
                'assets/highlighted/button-noripple-ts.html'
            ],
			componentName: ButtonNoRippleExample,
			url: "button/button-noripple",
			title: "Button with a disabled ripple"
        }
        this.buttonTypes = {
            filePath: [
                'assets/examples/button/button-types.html',
                'assets/examples/button/button-types.ts',
                'assets/examples/button/button-types.css'
            ],
            highlightPath: [
                'assets/highlighted/button-types-html.html',
                'assets/highlighted/button-types-ts.html',
                'assets/highlighted/button-types-css.html'
            ],
			componentName: ButtonTypesExample,
			url: "button/button-types",
			title: "Button types"
        }
    }
}