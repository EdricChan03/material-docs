import { Component, OnInit } from '@angular/core';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent, APIProperties, APIMethods } from './../../../shared/shared.docs';

@Component({
	selector: 'datepicker-docs-api',
	templateUrl: './apidatepicker.component.html'
})
export class DocsAPIDatepicker implements OnInit {
	datepickerProperties: APIProperties[];
	datepickerMethods: APIMethods[];
	datepickerIntlProperties: APIProperties[];
	datepickerInputProperties: APIProperties[];
	datepickerInputMethods: APIMethods[];
	datepickerToggleProperties: APIProperties[];
	constructor(private shared:SharedComponent){shared.setTitle('Docs > Datepicker > API')}
	ngOnInit() {
		this.datepickerIntlProperties = [
			{
				name: "calendarLabel",
				desc: "A label for the calendar popup (used by screen readers)."
			},
			{
				name: "openCalendarLabel",
				desc: "A label for the button used to open the calendar popup (used by screen readers)."
			},
			{
				name: "prevMonthLabel",
				desc: "A label for the previous month button (used by screen readers)."
			},
			{
				name: "nextMonthLabel",
				desc: "A label for the next month button (used by screen readers)."
			},
			{
				name: "prevYearLabel",
				desc: "A label for the previous year button (used by screen readers)."
			},
			{
				name: "nextYearLabel",
				desc: "A label for the next year button (used by screen readers)."
			},
			{
				name: "switchToMonthViewLabel",
				desc: "A label for the 'switch to month view' button (used by screen readers)."
			},
			{
				name: "switchToYearViewLabel",
				desc: "A label for the 'switch to year view' button (used by screen readers)."
			}
		]
		this.datepickerProperties = [
			{
				name: "startAt",
				isInput: true,
				desc: "The date to open the calendar to initially."
			},
			{
				name: "startView",
				isInput: true,
				desc: "The view that the calendar should start in."
			},
			{
				name: "touchUi",
				isInput: true,
				desc: "Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets."
			},
			{
				name: "disabled",
				isInput: true,
				desc: "Whether the datepicker pop-up should be disabled."
			},
			{
				name: "selectedChanged",
				isOutput: true,
				desc: "Emits new selected date when selected date changes."
			},
			{
				name: "opened",
				desc: "Whether the calendar is open."
			},
			{
				name: "id",
				desc: "The id for the datepicker calendar."
			}
		]
		this.datepickerMethods = [
			{
				name: "open",
				desc: "Opens the calendar."
			},
			{
				name: "close",
				desc: "Closes the calendar."
			}
		]
		this.datepickerInputProperties = [
			{
				name: "mdDatepicker, matDatepicker",
				isInput: true,
				desc: "The datepicker that this input is associated with."
			},
			{
				name: "mdDatepickerFilter, matDatepickerFilter",
				isInput: true,
				desc: "The validation of the date."
			},
			{
				name: "value",
				isInput: true,
				desc: "The value of the input."
			},
			{
				name: "min",
				isInput: true,
				desc: "The minimum valid date."
			},
			{
				name: "max",
				isInput: true,
				desc: "The maximum valid date."
			},
			{
				name: "disabled",
				isInput: true,
				desc: "Whether the datepicker-input is disabled."
			}
		]
		this.datepickerInputMethods = [
			{
				name: "getPopupConnectionElementRef",
				desc: "Gets the element that the datepicker popup should be connected to.",
				returns: [
					{
						name: "ElementRef",
						desc: "The element to connect the popup to."
					}
				]
			}
		]
		this.datepickerToggleProperties = [
			{
				name: "datepicker",
				isInput: true,
				alias: "mdDatepickerToggle, matDatepickerToggle",
				isHtml: true,
				desc: "Datepicker instance that the button will toggle. In master, the selector has changed to <code class=\"docs-code\">md-datepicker-toggle</code>."
			},
			{
				name: "disabled",
				isInput: true,
				desc: "Whether the toggle button is disabled."
			}
		]
	}
}