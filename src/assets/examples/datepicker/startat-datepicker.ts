import { Component } from '@angular/core';

@Component({
	selector: 'startat-datepicker-example',
	templateUrl: 'startat-datepicker.html'
})
export class StartViewDatepickerExample {
	startDate: Date = new Date(1990, 0, 1);
}