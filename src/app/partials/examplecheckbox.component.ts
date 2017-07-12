import { CheckboxConfigurableComponent } from './../../assets/examples/checkbox/checkbox-configuration';
import { CodeFiles } from './../shared/example-viewer.component';
import { SharedComponent } from './../shared/shared';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'checkbox-docs-examples',
    templateUrl: './examplecheckbox.component.html'
})
export class DocsExampleCheckbox implements OnInit {
    checkboxConfigurable: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Checkbox > Examples');}
    ngOnInit() {
        this.checkboxConfigurable = {
            filePath: [
                'assets/examples/checkbox/checkbox-configuration.html',
                'assets/examples/checkbox/checkbox-configuration.ts',
                'assets/examples/checkbox/checkbox-configuration.css'
            ],
            fileLabel: [
                'checkbox-configuration.html',
                'checkbox-configuration.ts',
                'checkbox-configuration.css'
            ],
            highlightPath: [
                'assets/highlighted/checkbox-configuration-html.html',
                'assets/highlighted/checkbox-configuration-ts.html',
                'assets/highlighted/checkbox-configuration-css.html'
            ],
            componentName: CheckboxConfigurableComponent
        }
    }
}