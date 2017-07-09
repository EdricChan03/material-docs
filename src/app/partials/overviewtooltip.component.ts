import { SharedComponent } from './../shared/shared';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tooltip-docs-overview',
    templateUrl: './overviewtooltip.component.html'
})

export class DocsOverviewTooltip implements OnInit {
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Tooltip > Overview');}
    ngOnInit() {
    }
}