import { SimpleCheckboxComponent } from './../../assets/examples/checkbox/simple-checkbox';
import { Files } from './../shared/example-viewer.component';
import { SharedComponent } from './../shared/shared';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'checkbox-docs-overview',
    templateUrl: './overviewcheckbox.component.html'
})
export class DocsOverviewCheckbox implements OnInit {
    simpleCheckbox: Files;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Checkbox > Overview');}
    ngOnInit() {
        this.simpleCheckbox = {
            filePath: [
                'assets/examples/checkbox/simple-checkbox.html',
                'assets/examples/checkbox/simple-checkbox.ts',
                'assets/examples/checkbox/simple-checkbox.css'
            ],
            fileLabel: [
                'simple-checkbox.html',
                'simple-checkbox.ts',
                'simple-checkbox.css'
            ],
            highlightPath: [
                'assets/highlighted/simple-checkbox-html.html',
                'assets/highlighted/simple-checkbox-ts.html',
                'assets/highlighted/simple-checkbox-css.html'
            ],
            componentName: SimpleCheckboxComponent
        }
    }
}