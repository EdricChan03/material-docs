import { SelectionListExample } from './../../../../assets/examples/list/selection-list';
import { SimpleListExample } from './../../../../assets/examples/list/simple-list';
import { SharedComponent } from './../../../shared/shared.docs';
import { CodeFiles } from "./../../../shared/example-viewer.docs";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'list-docs-overview',
    templateUrl: './overviewlist.component.html'
})
export class DocsOverviewList implements OnInit {
	simpleList: CodeFiles;
	selectionList: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > List > Overview');}
    ngOnInit() {
        this.simpleList = {
            filePath: [
                'assets/examples/list/simple-list.html',
                'assets/examples/list/simple-list.ts'
            ],
            highlightPath: [
                'assets/highlighted/simple-list-html.html',
                'assets/highlighted/simple-list-ts.html'
            ],
			componentName: SimpleListExample,
			url: "list/list-overview"
		}
		this.selectionList = {
			filePath: [
				'assets/examples/list/selection-list.html',
				'assets/examples/list/selection-list.ts'
			],
			highlightPath: [
				'assets/highlighted/selection-list-html.html',
				'assets/highlighted/selection-list-ts.html'
			],
			componentName: SelectionListExample,
			url: "list/list-selection"
		}
    }
}