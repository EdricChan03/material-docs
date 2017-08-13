import { SimpleCheckboxComponent } from './../../../../assets/examples/checkbox/simple-checkbox';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'checkbox-docs-overview',
    templateUrl: './overviewcheckbox.component.html'
})
export class DocsOverviewCheckbox implements OnInit {
    simpleCheckbox: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Checkbox > Overview');}
    ngOnInit() {
        this.simpleCheckbox = {
            filePath: [
                'assets/examples/checkbox/simple-checkbox.html',
                'assets/examples/checkbox/simple-checkbox.ts'
            ],
            highlightPath: [
                'assets/highlighted/simple-checkbox-html.html',
                'assets/highlighted/simple-checkbox-ts.html'
            ],
            componentName: SimpleCheckboxComponent
        }
    }
}