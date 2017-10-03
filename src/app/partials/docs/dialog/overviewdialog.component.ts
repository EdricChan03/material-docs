import { SharedComponent } from './../../../shared/shared.docs';
import { Router } from '@angular/router';
import { DialogResultExample } from './../../../../assets/examples/dialog/dialog-result';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dialog-docs-overview',
    templateUrl: './overviewdialog.component.html'
})
export class DocsOverviewDialog implements OnInit {
    dialogResult: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent){shared.setTitle('Docs > Dialog > Overview');}
    ngOnInit(){
        this.dialogResult = {
            highlightPath: [
                'assets/highlighted/dialog-result-html.html',
                'assets/highlighted/dialog-result-ts.html',
                'assets/highlighted/dialog-result-content-html.html',
                'assets/highlighted/dialog-result-content-css.html'
            ],
            filePath: [
                'assets/examples/dialog/dialog-result.html',
                'assets/examples/dialog/dialog-result.ts',
                'assets/examples/dialog/dialog-result-content.html',
                'assets/examples/dialog/dialog-result-content.css'
            ],
			componentName: DialogResultExample,
			url: "dialog/dialog-result"
        }
    }
}