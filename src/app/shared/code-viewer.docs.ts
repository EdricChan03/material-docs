import { MdSnackBar } from '@angular/material';
import { Component, AfterViewInit, ElementRef, ViewChild, Input, DoCheck } from '@angular/core';
import * as hljs from 'highlight.js';
@Component({
    selector: 'code-viewer',
    templateUrl: './code-viewer.docs.html'
})

export class CodeViewerComponent implements AfterViewInit, DoCheck {
    @ViewChild('code') content: ElementRef;
	@Input() language: string;
	@Input() fileName?: string;
    isDark: boolean;
    originalCode: string;
    constructor(private snackbar: MdSnackBar) { }
    copyToClipboard() {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            let textarea = document.createElement("textarea");
            textarea.textContent = this.originalCode;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (e) {
                this.snackbar.open("Error: ", e);
                return false;
            } finally {
                document.body.removeChild(textarea);
                this.snackbar.open('Code copied to clipboard', null, { duration: 5000 });
            }
        }
    }
    ngDoCheck() {
        if (window.localStorage.getItem('darkTheme')) {
            this.isDark = JSON.parse(window.localStorage.getItem('darkTheme'));
        } else {
            this.isDark = false;
        }
    }
    ngAfterViewInit() {
		// Checks if the file name input is stated
		if (this.fileName) {
			// Yes, the file input is stated
			hljs.highlightBlock(this.content.nativeElement.childNodes[6]);
			this.originalCode = this.content.nativeElement.childNodes[6].innerText;
		} else {
			// No, the file input is not stated or is invalid
			hljs.highlightBlock(this.content.nativeElement.childNodes[5]);
			this.originalCode = this.content.nativeElement.childNodes[5].innerText;
		}
    }
}