import { SharedComponent } from './shared';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef, DoCheck, Type } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { MdSnackBar } from "@angular/material";
@Component({
	selector: 'example-viewer',
	templateUrl: './example-viewer.component.html'
})

export class ExampleViewerComponent implements OnInit, DoCheck {
	@ViewChild('code', { read: ViewContainerRef }) content;
	constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private el: ElementRef, private router: Router, private shared: SharedComponent, private snackbar: MdSnackBar) { }
	/**
	 * The list of files
	 */
	@Input() exFiles: CodeFiles;
	/**
	 * Whether to change to guide viewer
	 * @todo Start implementation
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
	files = [];
	/**
	 * Whether to show the code
	 */
	showCode: boolean = false;
	docsIdDefaultInt: number = 0;
	sectionScroll = "";
	isDark: boolean;
	fileLabelReg = /[^/\\&\?]+\.\w{2,4}(?=([\?&].*$|$))/igm;
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
	readTextFile(file): any {
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
	fragRoute(id: string) {
		this.shared.fragRoute(id);
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
	ngOnInit() {
		try {
			// More info: https://stackoverflow.com/questions/14473180/regex-to-get-a-filename-from-a-url#26253039
			for (var i = 0; i < this.exFiles.highlightPath.length; i++) {
				let temp = <any>{};
				temp["highlightedCode"] = this.readTextFile(this.exFiles.highlightPath[i]);
				temp["code"] = this.readTextFile(this.exFiles.filePath[i]);
				temp["label"] = "" + this.exFiles.filePath[i].match(this.fileLabelReg);
				this.files.push(temp);
			}
			let factory = this.componentFactoryResolver.resolveComponentFactory(this.exFiles.componentName);
			let ref = this.content.createComponent(factory);
			ref.changeDetectorRef.detectChanges();
			this.el.nativeElement.querySelector(factory.selector);
			this.el.nativeElement.querySelector(factory.selector).className += 'example-viewer-body';
		} catch (error) {
			throw new Error(`Error: ${error}`);
		}
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
}
export interface CodeExternalComponent {
	link: string;
	name: string;
}