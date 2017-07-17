import { MdDialogRef, MdDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'advanced-list-example',
    templateUrl: 'advanced-list.html'
})
export class AdvancedListComponent {
    recentFiles: any = [
        {
            icon: "file-document-box",
            name: "Private.docx",
            updated: new Date(2017, 3, 14)
        },
        {
            icon: "file-presentation-box",
            name: "Work.pptx",
            updated: new Date(2017, 4, 21)
        }
    ]
    folders: any = [
        {
            color: "red",
            name: "Work"
        },
        {
            color: "yellow",
            name: "Fun"
        },
        {
            color: "lightblue",
            name: "Kids"
        }
    ]
    constructor(private dialog: MdDialog){}
    openInfoDialog(file) {
        let dialogRef = this.dialog.open(AdvancedListDialog);
        dialogRef.componentInstance.file = file;
    }
}

@Component({
    selector: 'advanced-list-dialog',
    templateUrl: 'advanced-list-dialog.html'
})
export class AdvancedListDialog {
    constructor(public dialogRef: MdDialogRef<AdvancedListDialog>){}
    file: any;
}