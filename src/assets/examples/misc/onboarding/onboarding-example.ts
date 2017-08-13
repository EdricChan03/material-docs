import { MdDialogRef, MdDialog } from '@angular/material';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'misc-onboarding-example',
	templateUrl: 'onboarding-example.html',
	styleUrls: ['onboarding-example.css'],
	encapsulation: ViewEncapsulation.None
})
export class MiscOnboardingExample {
	result: string;
	disableClose: boolean = false;
	constructor(private dialog: MdDialog){}
	getStarted() {
		let dialogRef = this.dialog.open(MiscOnboardingExampleDialog, {panelClass: 'onboarding-dialog-content', disableClose: this.disableClose});
		dialogRef.afterClosed().subscribe(result=> {
			if (result == 'skip') {
				this.result = "User clicked the skip button.";
			} else if (result == 'done') {
				this.result = "User clicked the getting started button.";
			} else {
				this.result = "User clicked outside the dialog or pressed the escape key";
			}
		})
	}
}

@Component({
	selector: 'misc-onboarding-example-dialog',
	templateUrl: 'onboarding-example-dialog.html',
	styleUrls: ['onboarding-example.css'],
	encapsulation: ViewEncapsulation.None
})
export class MiscOnboardingExampleDialog {
	pageIndex: number = 1;
	isPrevDisabled: boolean = true;
	isNextDisabled: boolean = false;
	constructor(private dialogRef: MdDialogRef<MiscOnboardingExampleDialog>){
	}
	/**
	 * Goes to the previous step
	 */
	previous() {
		if (this.pageIndex == 1) {
			// Can't navigate
			this.isPrevDisabled = true;
			this.isNextDisabled = false;
		} else if (this.pageIndex < 5) {
			this.isNextDisabled = false;
			// Can navigate
			this.pageIndex -= 1;
			this.isPrevDisabled = false;
		}
	}
	/**
	 * Goes to the next step
	 */
	next() {
		if (this.pageIndex == 4) {
			// Can't navigate
			this.isNextDisabled = true;
			this.isPrevDisabled = false;
		} else if (this.pageIndex > 0) {
			// Can navigate
			this.isPrevDisabled = false;
			this.isNextDisabled = false;
			this.pageIndex += 1;
		}
	}
	/**
	 * Whether the step is selected
	 * @param {number} index The index of the div
	 */
	isSelected(index: number): boolean {
		if (index == this.pageIndex) {
			return true;
		}
	}
}