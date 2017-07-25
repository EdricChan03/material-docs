import { MultipleButtonToggleComponent } from './../../../../assets/examples/button-toggle/multiple-button-toggle';
import { SharedComponent } from './../../../shared/shared';
import { CodeFiles } from './../../../shared/example-viewer.component';
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
				'assets/examples/button-toggle/multiple-button-toggle.html',
				'assets/examples/button-toggle/multiple-button-toggle.ts'
			],
			highlightPath: [
				'assets/highlighted/multiple-button-toggle-html.html',
				'assets/highlighted/multiple-button-toggle-ts.html'
			],
			componentName: MultipleButtonToggleComponent
		}
	}
}