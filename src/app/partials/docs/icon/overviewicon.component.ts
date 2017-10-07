import { IconColorExample } from './../../../../assets/examples/icon/icon-color';
import { SimpleIconExample } from './../../../../assets/examples/icon/icon-overview';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { SharedComponent } from './../../../shared/shared.docs';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'icon-docs-overview',
    templateUrl: './overviewicon.component.html'
})

export class DocsOverviewIcon implements OnInit {
	simpleIconExample: CodeFiles;
	iconColor: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent){shared.setTitle('Docs > Icon > Overview');}
    ngOnInit() {
		this.simpleIconExample = {
			filePath: [
				'assets/examples/icon/icon-overview.html',
				'assets/examples/icon/icon-overview.ts'
			],
			highlightPath: [
				'assets/highlighted/icon-overview-html.html',
				'assets/highlighted/icon-overview-ts.html'
			],
			componentName: SimpleIconExample,
			title: "Simple icon",
			url: "icon/icon-overview"
		};
		this.iconColor = {
			filePath: [
				'assets/examples/icon/icon-color.html',
				'assets/examples/icon/icon-color.ts'
			],
			highlightPath: [
				'assets/highlighted/icon-color-html.html',
				'assets/highlighted/icon-color-ts.html'
			],
			componentName: IconColorExample,
			title: "Icon with colors",
			url: "icon/icon-color"
		}
    }
}