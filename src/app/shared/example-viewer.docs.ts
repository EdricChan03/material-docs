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
	/**
	 * Whether to change to guide viewer
	 * @todo Start implementation
	 * @deprecated
	 */
	@Input() guideView?: boolean;
	/**
	 * The title of the example
	 * @note Using `docsTitle` instead of title as it will render as a `title` attribute
	 */
	@Input() docsTitle: string;
	/**
	 * The id of the example
	 * @note This can be accessible through `document.getElementById`
	 */
	@Input() docsId: string;
	/**
	 * Whether the example is only available on `master` build
	 */
	@Input() masterBuild?: boolean;
	/**
	 * The external component
	 */
	@Input() externalComponent?: CodeExternalComponent[];
	files = [] as CodeFiles[];
	/**
	 * Whether to show the code
	 */
	showCode: boolean = false;
	docsIdDefaultInt: number = 0;
	sectionScroll = "";
	isDark: boolean;
	fileLabelReg = /[^/\\&\?]+\.\w{2,4}(?=([\?&].*$|$))/igm;
	exampleHost: ComponentPortal<any>;
	/**
	 * For id attribute
	 * @returns {string}
	 */
	docsIdDefault(): string {
		this.docsIdDefaultInt++;
		return 'example' + this.docsIdDefaultInt;
	}
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
				this.snackbar.open("Error: ", e);
				return false;
			} finally {
				document.body.removeChild(textarea);
				this.snackbar.open('Code copied to clipboard', null, { duration: 5000 });
			}
		}
	}
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
	 * The name of the file
	 * @note Order matters!
	 * @type {string}
	 */
	filePath: string[];
	/**
	 * The path of the syntax highlighted file
	 * @note Order matters!
	 * @type {string[]}
	 */
	highlightPath: string[];
	/**
	 * The component name
	 * @type {Type<any>}
	 */
	componentName: Type<any>;
	/**
	 * The id of the demo
	 */
	url: string;
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