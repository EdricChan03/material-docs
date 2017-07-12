import { SharedComponent } from './../../shared/shared';
import { Component } from '@angular/core';

@Component({
    selector: 'guide-docs-theming',
    templateUrl: './theming.component.html'
})

export class DocsThemingGuide {
    constructor(private shared: SharedComponent) {
        shared.setTitle('Docs > Guides > Theming');
    }
}