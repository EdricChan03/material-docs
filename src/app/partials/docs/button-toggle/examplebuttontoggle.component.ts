import { ExclusiveButtonToggleExample } from './../../../../assets/examples/button-toggle/exclusive-button-toggle';
import { SharedComponent } from './../../../shared/shared.docs';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-button-toggle-examples',
	templateUrl: './examplebuttontoggle.component.html'
})
export class DocsExampleButtonToggle implements OnInit {
	buttonToggleGroup: CodeFiles;
	constructor(private shared: SharedComponent){shared.setTitle('Docs > Button Toggle > Examples')}
	ngOnInit() {
		this.buttonToggleGroup = {
			filePath: [
				'assets/examples/button-toggle/exclusive-button-toggle.html',
				'assets/examples/button-toggle/exclusive-button-toggle.ts'
			],
			highlightPath: [
				'assets/highlighted/exclusive-button-toggle-html.html',
				'assets/highlighted/exclusive-button-toggle-ts.html'
			],
			componentName: ExclusiveButtonToggleExample,
			url: "button-toggle/exclusive-button-toggle"
		}
	}
}