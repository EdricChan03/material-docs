import { Component } from '@angular/core';

@Component({
	selector: 'startat-datepicker',
	templateUrl: 'startat-datepicker.html'
})
export class StartViewDatepickerComponent {
	startDate: Date = new Date(1990, 0, 1);
}