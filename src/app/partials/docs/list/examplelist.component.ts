import { AdvancedListExample } from './../../../../assets/examples/list/advanced-list';
import { NavListExample } from './../../../../assets/examples/list/nav-list';
import { SharedComponent } from './../../../shared/shared.docs';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'list-docs-examples',
    templateUrl: './examplelist.component.html'
})
export class DocsExampleList implements OnInit {
    navList: CodeFiles;
    advancedList: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > List > Examples');}
    ngOnInit() {
        this.navList = {
            filePath: [
                'assets/examples/list/nav-list.html',
                'assets/examples/list/nav-list.ts'
            ],
            highlightPath: [
                'assets/highlighted/nav-list-html.html',
                'assets/highlighted/nav-list-ts.html'
            ],
			componentName: NavListExample,
			url: "list/list-nav"
        }
        this.advancedList = {
            filePath: [
                'assets/examples/list/advanced-list.html',
                'assets/examples/list/advanced-list.ts',
                'assets/examples/list/advanced-list-dialog.html'
            ],
            highlightPath: [
                'assets/highlighted/advanced-list-html.html',
                'assets/highlighted/advanced-list-ts.html',
                'assets/highlighted/advanced-list-dialog-html.html'
            ],
			componentName: AdvancedListExample,
			url: "list/list-advanced"
        }
    }
}