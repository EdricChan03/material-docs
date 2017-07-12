import { SharedComponent } from './shared';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { MdSnackBar } from "@angular/material";
@Component({
    selector: 'example-viewer',
    templateUrl: './example-viewer.component.html'
})

export class ExampleViewerComponent implements OnInit {
    @ViewChild('code', { read: ViewContainerRef }) content;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private el: ElementRef, private router: Router, private shared: SharedComponent, private snackbar: MdSnackBar) { }
    /**
     * The list of files
     */
    @Input() exFiles: CodeFiles;
    /**
     * Whether to change to guide viewer
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
    files = [];
    /**
     * Whether to show the code
     */
    showCode: boolean = false;
    docsIdDefaultInt: number = 0;
    sectionScroll = "";
    isDark: boolean;
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
    /**
     * Toggles theme
     */
    toggleTheme() {
        this.isDark = !this.isDark;
        window.localStorage.setItem('darkTheme', JSON.stringify(this.isDark));
    }
    ngOnInit() {
        try {
            for (var i = 0; i < this.exFiles.highlightPath.length; i++) {
                let temp = <any>{};
                temp["highlightedCode"] = this.readTextFile(this.exFiles.highlightPath[i]);
                temp["code"] = this.readTextFile(this.exFiles.filePath[i]);
                temp["label"] = this.exFiles.fileLabel[i];
                this.files.push(temp);
            }
            let factory = this.componentFactoryResolver.resolveComponentFactory(this.exFiles.componentName);
            let ref = this.content.createComponent(factory);
            ref.changeDetectorRef.detectChanges();
            this.el.nativeElement.querySelector(factory.selector).className += 'example-viewer-body';
            if (window.localStorage.getItem('darkTheme')) {
                this.isDark = JSON.parse(window.localStorage.getItem('darkTheme'));
            } else {
                this.isDark = false;
            }
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
}
export interface CodeFiles {
    /**
     * The name of the file
     * @note Order matters!
     */
    filePath: string[] | any;
    /**
     * The label of the files
     * @note Order matters!
     */
    fileLabel: string[] | any;
    /**
     * The path of the syntax highlighted file
     * @note Order matters!
     */
    highlightPath: string[] | any;
    /**
     * The component name
     */
    componentName: any;
}