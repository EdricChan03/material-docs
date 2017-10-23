import { Component } from '@angular/core';
@Component({
    selector: 'selection-list-example',
    templateUrl: 'selection-list.html'
})
export class SelectionListExample {
	showStats: boolean = false;
	typeOfFruits = ['Apples', 'Oranges', 'Grapefruit'];
}