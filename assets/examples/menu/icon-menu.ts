import { MatDialog } from "@angular/material";
import { Component } from "@angular/core";

@Component({
	selector: 'icon-menu-example',
	templateUrl: 'icon-menu.html'
})
/**
 * Based on the original AngularJS Material example
 */
export class IconMenuExample {
	alert: boolean = false;
	constructor(private dialog: MatDialog){}
	redial() {
		this.dialog.open(IconMenuDialog);
	}
	setAlerts() {
		this.alert = !this.alert;
	}
}

@Component({
	selector: 'icon-menu-dialog',
	templateUrl: 'icon-menu-dialog.html'
})
export class IconMenuDialog {}