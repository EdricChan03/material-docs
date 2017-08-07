import { SimpleButtonToggleComponent } from './../../../../assets/examples/button-toggle/simple-button-toggle';
import { SharedComponent } from './../../../shared/shared';
import { CodeFiles } from './../../../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'button-toggle-docs-overview',
    templateUrl: './overviewbuttontoggle.component.html'
})
export class DocsOverviewButtonToggle implements OnInit {
    simpleButtonToggle: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Button toggle > Overview');}
    ngOnInit() {
        this.simpleButtonToggle = {
            highlightPath: [
                'assets/highlighted/simple-button-toggle-html.html',
                'assets/highlighted/simple-button-toggle-ts.html'
            ],
            filePath: [
                'assets/examples/button-toggle/simple-button-toggle.html',
                'assets/examples/button-toggle/simple-button-toggle.ts'
            ],
            componentName: SimpleButtonToggleComponent
        }
    }
}