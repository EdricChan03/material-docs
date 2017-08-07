import { Component } from '@angular/core';

@Component({
	selector: 'min-max-validation-datepicker',
	templateUrl: 'min-max-validation-datepicker.html'
})
export class MinMaxDatepickerComponent {
	minDate = new Date(2000, 0, 1);
	maxDate = new Date(2020, 0, 1);
}