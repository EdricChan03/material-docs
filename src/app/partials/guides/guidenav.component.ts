import { SharedComponent } from '../../shared/shared';
import { Component } from '@angular/core';
@Component({
    selector: 'guide-docs-nav',
    templateUrl: './guidenav.component.html'
})

export class DocsGuideNav {
    constructor(private shared: SharedComponent){
        shared.setTitle('Docs > Guides');
    }
}