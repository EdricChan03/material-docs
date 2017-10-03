import { PseudoCheckboxExample } from './../../../../assets/examples/checkbox/pseudo-checkbox';
import { CheckboxConfigurableExample } from './../../../../assets/examples/checkbox/configurable-checkbox';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'checkbox-docs-examples',
    templateUrl: './examplecheckbox.component.html'
})
export class DocsExampleCheckbox implements OnInit {
	checkboxConfigurable: CodeFiles;
	pseudoCheckbox: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Checkbox > Examples');}
    ngOnInit() {
        this.checkboxConfigurable = {
            filePath: [
                'assets/examples/checkbox/configurable-checkbox.html',
                'assets/examples/checkbox/configurable-checkbox.ts',
                'assets/examples/checkbox/configurable-checkbox.css'
            ],
            highlightPath: [
                'assets/highlighted/configurable-checkbox-html.html',
                'assets/highlighted/configurable-checkbox-ts.html',
                'assets/highlighted/configurable-checkbox-css.html'
            ],
			componentName: CheckboxConfigurableExample,
			url: "checkbox/checkbox-configurable",
			title: "Checkbox with configurable properties"
		}
		this.pseudoCheckbox = {
			filePath: [
				'assets/examples/checkbox/pseudo-checkbox.html',
				'assets/examples/checkbox/pseudo-checkbox.ts'
			],
			highlightPath: [
				'assets/highlighted/pseudo-checkbox-html.html',
				'assets/highlighted/pseudo-checkbox-ts.html'
			],
			componentName: PseudoCheckboxExample,
			url: "checkbox/pseudo-checkbox",
			title: "Pseudo Checkboxes"
		}
	}
}