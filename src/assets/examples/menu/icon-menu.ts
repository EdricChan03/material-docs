import { MdDialog } from "@angular/material";
import { Component } from "@angular/core";

@Component({
	selector: 'icon-menu-example',
	templateUrl: 'icon-menu.html'
})
export class IconMenuComponent {
	alert: boolean = false;
	constructor(private dialog: MdDialog){}
	redial() {
		this.dialog.open(IconMenuDialog);
	}
	setAlerts() {
		this.alert = !this.alert;
	}
}

@Component({
	selector: 'icon-menu-dialog',
	template: `<h3 md-dialog-title>Suddenly, a redial</h3>
				<div md-dialog-content>
					<p>You just called a friend; who told you the most amazing story. Have a cookie!</p>
				</div>
				<div md-dialog-actions align="end">
					<button md-button md-dialog-close style="text-transform: uppercase" color="primary">That was easy!</button>
				</div>
			  `
})
export class IconMenuDialog {}