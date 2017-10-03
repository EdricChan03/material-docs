import { IconSVGExample } from './../../../../assets/examples/icon/icon-svg';
import { IconButtonExample } from './../../../../assets/examples/icon/icon-button';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { SharedComponent } from './../../../shared/shared.docs';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'icon-docs-examples',
    templateUrl: './exampleicon.component.html'
})

export class DocsExampleIcon implements OnInit {
	iconSvgExample: CodeFiles;
	iconButtonExample: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent){shared.setTitle('Docs > Icon > Examples');}
    ngOnInit() {
		this.iconSvgExample = {
			filePath: [
				'assets/examples/icon/icon-svg.html',
				'assets/examples/icon/icon-svg.ts'
			],
			highlightPath: [
				'assets/highlighted/icon-svg-html.html',
				'assets/highlighted/icon-svg-ts.html'
			],
			componentName: IconSVGExample,
			title: "SVG Icon",
			url: "icon/icon-svg"
		}
		this.iconButtonExample = {
			filePath: [
				'assets/examples/icon/icon-button.html',
				'assets/examples/icon/icon-button.ts'
			],
			highlightPath: [
				'assets/highlighted/icon-button-html.html',
				'assets/highlighted/icon-button-ts.html'
			],
			componentName: IconButtonExample,
			title: "Icon button",
			url: "icon/icon-button"
		}
    }
}