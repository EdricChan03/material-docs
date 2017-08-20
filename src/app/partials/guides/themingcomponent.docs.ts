import { SharedComponent } from './../../shared/shared.docs';
import {Component} from '@angular/core';

@Component({
	selector: 'guides-docs-themingcomponent',
	templateUrl: './themingcomponent.docs.html'
})

export class DocsThemingComponentGuide {
	constructor(private shared: SharedComponent) {
		shared.setTitle("Docs > Guides > Theming your components");
	}
}