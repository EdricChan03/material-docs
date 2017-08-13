import { MdDialogRef, MdDialog } from '@angular/material';
import { Component, AfterViewInit } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
    selector: 'advanced-list-example',
    templateUrl: 'advanced-list.html'
})
export class AdvancedListComponent {
	// Note that these icons are custom and are provided through a custom iconset
    recentFiles: any = [
        {
            icon: "file-word-box",
            name: "Private.docx",
			updated: new Date(2017, 3, 14),
			color: "#2a5699"
        },
        {
            icon: "file-powerpoint-box",
            name: "Work.pptx",
			updated: new Date(2017, 4, 21),
			color: "#d24625"
		},
		{
			icon: 'file-excel-box',
			name: "Taxes.xlsx",
			updated: new Date(2017, 8, 1),
			color: "#207347"
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
    openInfoDialog(file: any) {
        let dialogRef = this.dialog.open(AdvancedListDialog);
        dialogRef.componentInstance.file = file;
    }
}

@Component({
    selector: 'advanced-list-dialog',
    templateUrl: 'advanced-list-dialog.html'
})
export class AdvancedListDialog implements AfterViewInit{
    constructor(public dialogRef: MdDialogRef<AdvancedListDialog>){}
	file: any;
	ngAfterViewInit() {
		hljs.highlightBlock(document.getElementById('code'));
	}
}