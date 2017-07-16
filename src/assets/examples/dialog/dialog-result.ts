import { MdDialogRef } from '@angular/material';
import { MdDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-result-example',
    templateUrl: 'dialog-result.html'
})
export class DialogResultComponent {
    chosenResult: string;
    constructor(public dialog: MdDialog){}

    openDialog() {
        let dialogRef = this.dialog.open(DialogResult);
        dialogRef.afterClosed().subscribe(result=> {
            this.chosenResult = result;
        })
    }
}

@Component({
    selector: 'dialog-result',
    templateUrl: 'dialog-result-content.html',
    styleUrls: ['dialog-result-content.css']
})
export class DialogResult {
    constructor(public dialogRef: MdDialogRef<DialogResult>){}
}