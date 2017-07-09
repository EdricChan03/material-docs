import { SharedComponent } from './../shared/shared';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'checkbox-docs-overview',
    templateUrl: './overviewcheckbox.component.html'
})
export class DocsOverviewCheckbox implements OnInit {
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Checkbox > Overview');}
    ngOnInit() { }
}