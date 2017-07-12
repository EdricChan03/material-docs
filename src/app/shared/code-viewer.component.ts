import { MdSnackBar } from '@angular/material';
import { Component, AfterViewInit, ElementRef, ViewChild, ContentChild, Input, ViewEncapsulation, OnInit } from '@angular/core';
import * as hljs from 'highlight.js';
@Component({
    selector: 'code-viewer',
    templateUrl: './code-viewer.component.html'
})

export class CodeViewerComponent implements AfterViewInit, OnInit {
    @ViewChild('code') content: ElementRef;
    isDark: boolean;
    originalCode: string;
    constructor(private snackbar: MdSnackBar) { }
    toggleTheme() {
        this.isDark = !this.isDark;
        window.localStorage.setItem('darkTheme', JSON.stringify(this.isDark));
    }
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
    ngOnInit() {
        if (window.localStorage.getItem('darkTheme')) {
            this.isDark = true;
        } else {
            this.isDark = false;
        }
    }
    ngAfterViewInit() {
        hljs.highlightBlock(this.content.nativeElement.childNodes[5]);
        this.originalCode = this.content.nativeElement.childNodes[5].innerText;
        console.log(this.content.nativeElement.childNodes);
    }
}