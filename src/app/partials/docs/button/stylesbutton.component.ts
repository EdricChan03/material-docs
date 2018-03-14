import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'button-docs-styles',
	templateUrl: './stylesbutton.component.html'
})
export class DocsStylesBtn implements OnInit {

	constructor(private shared: SharedComponent) {
		shared.setTitle("Docs > Button > Styling");
	}

	ngOnInit() {
	}

}
