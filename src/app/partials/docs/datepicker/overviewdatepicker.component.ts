import { MinMaxDatepickerComponent } from './../../../../assets/examples/datepicker/min-max-validation-datepicker';
import { FilterDatepickerComponent } from './../../../../assets/examples/datepicker/filter-validation-datepicker';
import { TouchDatepickerComponent } from './../../../../assets/examples/datepicker/touch-ui-datepicker';
import { ApiDatepickerComponent } from './../../../../assets/examples/datepicker/api-datepicker';
import { StartViewDatepickerComponent } from './../../../../assets/examples/datepicker/startat-datepicker';
import { SimpleDatepickerComponent } from './../../../../assets/examples/datepicker/simple-datepicker';
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
			componentName: SimpleDatepickerComponent
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
			componentName: StartViewDatepickerComponent
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
			componentName: MinMaxDatepickerComponent
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
			componentName: FilterDatepickerComponent
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
			componentName: TouchDatepickerComponent
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
			componentName: ApiDatepickerComponent
		}
		
    }
}