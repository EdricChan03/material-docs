import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'example-viewer',
    templateUrl: './example-viewer.component.html'
})

export class ExampleViewerComponent implements OnInit {
    @ViewChild('code', { read: ViewContainerRef }) content;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private el: ElementRef) { }
    /**
     * The list of files
     */
    @Input() exFiles: Files[];
    /**
     * Whether to change to guide viewer
     */
    @Input() guideView?: boolean;
    /**
     * Whether to show code view on init
     */
    @Input() showCode: boolean;
    /**
     * The title of the example
     */
    @Input() title: string;
    /**
     * Reads a text file
     * @param {string} file The file to read
     */
    files = [];
    code: string;
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
    ngOnInit() {
        for (var i = 0; i < this.exFiles[0].highlightPath.length; i++) {
            let temp = <any>{};
            temp["code"] = this.readTextFile(this.exFiles[0].highlightPath[i]);
            temp["label"] = this.exFiles[0].fileName[i];
            this.files.push(temp);
        }
        let factory = this.componentFactoryResolver.resolveComponentFactory(this.exFiles[0].componentName);
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
    fileName: any[] | any;
    /**
     * The path of the syntax highlighted file
     * @note Order matters!
     */
    highlightPath: any[] | any;
    /**
     * The component name
     */
    componentName: any;
}
export interface FileCode {
    code: string | any;
    label: string;
}