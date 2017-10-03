import { MatDialog, MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
@Component({
    selector: 'configurable-dialog-example',
    templateUrl: 'configurable-dialog.html',
    styleUrls: ['configurable-dialog.css']
})
export class ConfigurableDialogExample {
    data: string = "Jazzy jazzy jazz";
    disableClose: boolean = false;
    constructor(public dialog: MatDialog) { }

    openDialog() {
        let dialogRef = this.dialog.open(ConfigurableDialog);
        dialogRef.componentInstance.data = this.data;
        if (this.disableClose) {
            dialogRef.disableClose = true;
        }
    }
}

@Component({
    selector: 'configurable-dialog',
    templateUrl: 'configurable-dialog-content.html'
})
export class ConfigurableDialog {
    width: number;
    height: number;
    data: string | any;
    top: number;
    left: number;
    right: number;
    bottom: number;
    constructor(public dialogRef: MatDialogRef<ConfigurableDialog>) { }

    changeSize() {
        let stringWidth, stringHeight;
        if (this.width) {
            stringWidth = this.width.toString();
            stringWidth += 'px';
        } else {
            stringWidth = "600px";
        }
        if (this.height) {
            stringHeight = this.height.toString();
            stringHeight += 'px';
        } else {
            stringHeight = "500px";
        }
        this.dialogRef.updateSize(stringWidth, stringHeight);
    }
    changePos() {
        let stringLeft, stringRight, stringTop, stringBottom;
        if (this.top && this.bottom && this.left && this.right) {
            stringTop = this.top.toString();
            stringTop += 'px';
            stringBottom = this.bottom.toString();
            stringBottom += 'px';
            stringLeft = this.left.toString();
            stringLeft += 'px';
            stringRight = this.right.toString();
            stringRight += 'px';
            this.dialogRef.updatePosition({ top: stringTop, bottom: stringBottom, left: stringLeft, right: stringRight });
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
}