import { AdvancedListComponent } from './../../../../assets/examples/list/advanced-list';
import { NavListComponent } from './../../../../assets/examples/list/nav-list';
import { SharedComponent } from './../../../shared/shared';
import { CodeFiles } from './../../../shared/example-viewer.component';
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
            fileLabel: [
                'nav-list.html',
                'nav-list.ts'
            ],
            highlightPath: [
                'assets/highlighted/nav-list-html.html',
                'assets/highlighted/nav-list-ts.html'
            ],
            componentName: NavListComponent
        }
        this.advancedList = {
            filePath: [
                'assets/examples/list/advanced-list.html',
                'assets/examples/list/advanced-list.ts',
                'assets/examples/list/advanced-list-dialog.html'
            ],
            fileLabel: [
                'advanced-list.html',
                'advanced-list.ts',
                'advanced-list-dialog.html'
            ],
            highlightPath: [
                'assets/highlighted/advanced-list-html.html',
                'assets/highlighted/advanced-list-ts.html',
                'assets/highlighted/advanced-list-dialog-html.html'
            ],
            componentName: AdvancedListComponent
        }
    }
}