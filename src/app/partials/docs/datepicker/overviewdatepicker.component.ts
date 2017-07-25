import { SharedComponent } from './../../../shared/shared';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'datepicker-docs-overview',
    templateUrl: './overviewdatepicker.component.html'
})
export class DocsOverviewDatepicker implements OnInit {
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Datepicker > Overview')}
    ngOnInit() {
        console.log("TODO");
    }
}