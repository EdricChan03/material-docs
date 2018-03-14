import { SharedComponent } from './shared.docs';
import { Component, OnInit, Input, ElementRef, DoCheck, Type } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ComponentPortal } from '@angular/cdk/portal';
@Component({
	selector: 'example-viewer',
	templateUrl: './example-viewer.docs.html'
})

export class ExampleViewerComponent implements OnInit, DoCheck {
	constructor(private el: ElementRef, private router: Router, private shared: SharedComponent, private snackbar: MatSnackBar) { }
	/**
	 * The list of files
	 */
	@Input() exFiles: CodeFiles;
	files = [];
	/**
	 * Whether to show the code
	 */
	showCode: boolean = false;
	isDark: boolean;
	fileLabelReg = /[^/\\&\?]+\.\w{2,4}(?=([\?&].*$|$))/igm;
	exampleHost: ComponentPortal<any>;
	/**
	 * Reads a text file
	 * @param {string} file The file to read
	 */
	readTextFile(file: string): any {
		try {
			let allText;
			let rawFile = new XMLHttpRequest();
			rawFile.open("GET", file, false);
			rawFile.onreadystatechange = () => {
				if (rawFile.readyState === 4) {
					if (rawFile.status === 200 || rawFile.status == 0) {
						allText = rawFile.responseText;
					}
				}
			}
			rawFile.send(null);
			return allText;
		} catch (e) {
			throw new Error(`Error: ${e}`);
		}
	}
	/**
	 * Toggles the source code
	 */
	toggleSource() {
		this.showCode = !this.showCode;
	}
	/**
	 * Copies code to clipboard
	 * @param {string} code The code to copy
	 */
	copyToClipboard(code: string) {
		if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
			let textarea = document.createElement("textarea");
			textarea.textContent = code;
			textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
			document.body.appendChild(textarea);
			textarea.select();
			try {
				return document.execCommand("copy");  // Security exception may be thrown by some browsers.
			} catch (e) {
				this.snackbar.open(`Error: ${e}`, null, {horizontalPosition: "start", duration: 6000, panelClass: ['mat-elevation-z2']});
				return false;
			} finally {
				document.body.removeChild(textarea);
				this.snackbar.open('Code copied to clipboard', null, { duration: 5000, horizontalPosition: "start", panelClass: ['mat-elevation-z2'] });
			}
		}
	}
	/**
	 * Views the stackblitz demo
	 */
	viewStackblitzDemo() {
		window.open("https://material2-docs-all-examples.stackblitz.io/"+this.exFiles.url);
	}
	ngOnInit() {
		// More info: https://stackoverflow.com/questions/14473180/regex-to-get-a-filename-from-a-url#26253039
		for (var i = 0; i < this.exFiles.highlightPath.length; i++) {
			let temp = <any>{};
			temp["highlightedCode"] = this.readTextFile(this.exFiles.highlightPath[i]);
			temp["code"] = this.readTextFile(this.exFiles.filePath[i]);
			temp["label"] = "" + this.exFiles.filePath[i].match(this.fileLabelReg);
			this.files.push(temp);
		}
		this.exampleHost = new ComponentPortal(this.exFiles.componentName);
	}
	ngDoCheck() {
		if (window.localStorage.getItem('darkTheme')) {
			this.isDark = JSON.parse(window.localStorage.getItem('darkTheme'));
		} else {
			this.isDark = false;
		}
	}
}
export interface CodeFiles {
	/**
	 * The paths to the example files for use with the source code tabs
	 * @note Order matters!
	 * @type {string[]}
	 * @example <caption>Button types example</caption>
	 * {
	 * 	filePath: [
	 * 		'assets/button/button-types.html',
	 * 		'assets/button/button-types.ts'
	 * 	]
	 * }
	 */
	filePath: string[];
	/**
	 * The paths to the syntax highlighted example files for use with the source code tabs
	 * @note Order matters!
	 * @type {string[]}
	 * @example <caption>Button types example</caption>
	 * {
	 * 	filePath: [
	 * 		'assets/highlighted/button-types-html.html',
	 * 		'assets/highlighted/button-types-ts.html'
	 * 	]
	 * }
	 */
	highlightPath: string[];
	/**
	 * The component for the example
	 * @type {Type<any>}
	 */
	componentName: Type<any>;
	/**
	 * The id of the demo for use with Stackblitz
	 * @type {string}
	 */
	url: string;
	/**
	 * The title of the demo
	 */
	title: string;
	/**
	 * Notices about the example
	 */
	notices?: CodeNotices[];
}
export interface CodeExternalComponent {
	/**
	 * The link of the external component docs
	 */
	link: string;
	/**
	 * The name of the external component
	 */
	name: string;
}
export interface CodeNotices {
	/**
	 * The name of the chip
	 */
	name: string;
	/**
	 * The description of the chip
	 */
	desc: string;
	/**
	 * The link of the chip to go to
	 */
	link?: string;
	/**
	 * The icon of the chip
	 */
	icon?: string;
	/**
	 * The color of the chip
	 */
	color?: "primary"|"accent"|"warn";
}