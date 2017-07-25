import { SimpleListComponent } from './../../../../assets/examples/list/simple-list';
import { SharedComponent } from './../../../shared/shared';
import { CodeFiles } from "./../../../shared/example-viewer.component";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'list-docs-overview',
    templateUrl: './overviewlist.component.html'
})
export class DocsOverviewList implements OnInit {
    simpleList: CodeFiles;
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
            componentName: SimpleListComponent
        }
    }
}