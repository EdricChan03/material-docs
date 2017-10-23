import { MatDialogRef, MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-result-example',
    templateUrl: 'dialog-result.html'
})
export class DialogResultExample {
    chosenResult: string;
    constructor(public dialog: MatDialog){}

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
    constructor(public dialogRef: MatDialogRef<DialogResult>){}
}