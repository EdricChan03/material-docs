import { SharedComponent } from './../../shared/shared.docs';
import { Component } from '@angular/core';

@Component({
    selector: 'guide-docs-theming',
    templateUrl: './theming.docs.html'
})

export class DocsThemingGuide {
    constructor(private shared: SharedComponent) {
        shared.setTitle('Docs > Guides > Theming');
    }
}