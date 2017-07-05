import { SharedComponent } from './routing.shared';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
@Component({
    selector: 'example-viewer',
    templateUrl: './example-viewer.component.html'
})

export class ExampleViewerComponent implements OnInit{
    @ViewChild('code', { read: ViewContainerRef }) content;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private el: ElementRef, private router: Router, private shared: SharedComponent) { }
    /**
     * The list of files
     */
    @Input() exFiles: Files;
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
    getFileExtension(filename) {
        return filename.split('.').pop();
    }
    getFileName(filename) {
        return filename.replace(/^.*[\\\/]/, '');
    }
    toggleSource() {
        this.showCode = !this.showCode;
    }
    fragRoute(id: string) {
        this.shared.fragRoute(id);
    }
    ngOnInit() {
        for (var i = 0; i < this.exFiles.highlightPath.length; i++) {
            let temp = <any>{};
            temp["code"] = this.readTextFile(this.exFiles.highlightPath[i]);
            temp["label"] = this.exFiles.fileName[i];
            this.files.push(temp);
        }
        let factory = this.componentFactoryResolver.resolveComponentFactory(this.exFiles.componentName);
        let ref = this.content.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
        this.el.nativeElement.querySelector(factory.selector).className += 'example-viewer-body';
    }
}
export interface Files {
    /**
     * The name of the file
     * @note Order matters!
     */
    fileName: string[] | any;
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