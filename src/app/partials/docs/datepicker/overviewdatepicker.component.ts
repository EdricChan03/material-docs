import { MinMaxDatepickerExample } from './../../../../assets/examples/datepicker/min-max-validation-datepicker';
import { FilterDatepickerExample } from './../../../../assets/examples/datepicker/filter-validation-datepicker';
import { TouchDatepickerExample } from './../../../../assets/examples/datepicker/touch-ui-datepicker';
import { ApiDatepickerExample } from './../../../../assets/examples/datepicker/api-datepicker';
import { StartViewDatepickerExample } from './../../../../assets/examples/datepicker/startat-datepicker';
import { SimpleDatepickerExample } from './../../../../assets/examples/datepicker/simple-datepicker';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'datepicker-docs-overview',
    templateUrl: './overviewdatepicker.component.html'
})
export class DocsOverviewDatepicker implements OnInit {
	simpleDatepicker: CodeFiles;
	startViewDatepicker: CodeFiles;
	minMaxDatepicker: CodeFiles;
	filterDatepicker: CodeFiles;
	touchDatepicker: CodeFiles;
	apiDatepicker: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Datepicker > Overview')}
    ngOnInit() {
        this.simpleDatepicker = {
			filePath: [
				'assets/examples/datepicker/simple-datepicker.html',
				'assets/examples/datepicker/simple-datepicker.ts'
			],
			highlightPath: [
				'assets/highlighted/simple-datepicker-html.html',
				'assets/highlighted/simple-datepicker-ts.html'
			],
			componentName: SimpleDatepickerExample,
			url: "datepicker/datepicker-overview"
		}
		this.startViewDatepicker = {
			filePath: [
				'assets/examples/datepicker/startat-datepicker.html',
				'assets/examples/datepicker/startat-datepicker.ts'
			],
			highlightPath: [
				'assets/highlighted/startat-datepicker-html.html',
				'assets/highlighted/startat-datepicker-ts.html'
			],
			componentName: StartViewDatepickerExample,
			url: "datepicker/datepicker-startat"
		}
		this.minMaxDatepicker = {
			filePath: [
				'assets/examples/datepicker/min-max-datepicker.html',
				'assets/examples/datepicker/min-max-datepicker.ts'
			],
			highlightPath: [
				'assets/highlighted/min-max-datepicker-html.html',
				'assets/highlighted/min-max-datepicker-ts.html'
			],
			componentName: MinMaxDatepickerExample,
			url: "datepicker/datepicker-min-max"
		}
		this.filterDatepicker = {
			filePath: [
				'assets/examples/datepicker/filter-validation-datepicker.html',
				'assets/examples/datepicker/filter-validation-datepicker.ts'
			],
			highlightPath: [
				'assets/highlighted/filter-validation-datepicker-html.html',
				'assets/highlighted/filter-validation-datepicker-ts.html'
			],
			componentName: FilterDatepickerExample,
			url: "datepicker/datepicker-filter"
		}
		this.touchDatepicker = {
			filePath: [
				'assets/examples/datepicker/touch-ui-datepicker.html',
				'assets/examples/datepicker/touch-ui-datepicker.ts'
			],
			highlightPath: [
				'assets/highlighted/touch-ui-datepicker-html.html',
				'assets/highlighted/touch-ui-datepicker-ts.html'
			],
			componentName: TouchDatepickerExample,
			url: "datepicker/datepicker-touchui"
		}
		this.apiDatepicker = {
			filePath: [
				'assets/examples/datepicker/api-datepicker.html',
				'assets/examples/datepicker/api-datepicker.ts'
			],
			highlightPath: [
				'assets/highlighted/api-datepicker-html.html',
				'assets/highlighted/api-datepicker-ts.html'
			],
			componentName: ApiDatepickerExample,
			url: "datepicker/datepicker-api"
		}
		
    }
}