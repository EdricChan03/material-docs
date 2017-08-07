import { Component } from '@angular/core';

@Component({
	selector: 'filter-validation-datepicker',
	templateUrl: 'filter-validation-datepicker.html'
})
export class FilterDatepickerComponent {
	myFilter = (d: Date): boolean => {
		const day = d.getDay();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	}
}