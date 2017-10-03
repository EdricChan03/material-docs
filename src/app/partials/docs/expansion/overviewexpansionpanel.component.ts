import { SimpleExpansionExample } from './../../../../assets/examples/expansion/simple-expansion';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-expansion-overview',
	templateUrl: './overviewexpansionpanel.component.html'
})
export class DocsOverviewExpansion implements OnInit {
	simpleExpansion: CodeFiles;
	constructor(private shared: SharedComponent){shared.setTitle('Docs > Expansion > Overview')}
	ngOnInit() {
		this.simpleExpansion = {
			filePath: [
				'assets/examples/expansion/simple-expansion.html',
				'assets/examples/expansion/simple-expansion.ts'
			],
			highlightPath: [
				'assets/highlighted/simple-expansion-html.html',
				'assets/highlighted/simple-expansion-ts.html'
			],
			componentName: SimpleExpansionExample,
			url: "expansion/expansion-overview",
			title: "Simple expansion panel"
		}
	}
}