import { SharedComponent } from '../../shared/shared';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'guide-docs-gettingstarted',
    templateUrl: './gettingstarted.component.html'
})

export class DocsGettingStartedGuide {
    constructor(private shared: SharedComponent){
        shared.setTitle('Docs > Guides > Getting Started');
    }
}