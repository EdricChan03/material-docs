import { SharedComponent } from './../../../shared/shared.docs';
import { ConfigurableDialogExample } from './../../../../assets/examples/dialog/configurable-dialog';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'docs-dialog-example',
    templateUrl: './exampledialog.component.html'
})
export class DocsExampleDialog implements OnInit {
    dialogConfig: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Dialog > Examples');}
    ngOnInit(){
        this.dialogConfig = {
            highlightPath: [
                'assets/highlighted/configurable-dialog-html.html',
                'assets/highlighted/configurable-dialog-ts.html',
                'assets/highlighted/configurable-dialog-css.html',
                'assets/highlighted/configurable-dialog-content-html.html'
            ],
            filePath: [
                'assets/examples/dialog/configurable-dialog.html',
                'assets/examples/dialog/configurable-dialog.ts',
                'assets/examples/dialog/configurable-dialog.css',
                'assets/examples/dialog/configurable-dialog-content.html'
            ],
			componentName: ConfigurableDialogExample,
			url: "dialog/dialog-configurable"
        }
    }
}