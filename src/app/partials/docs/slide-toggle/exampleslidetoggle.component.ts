import { ConfigurableSlideToggleComponent } from './../../../../assets/examples/slide-toggle/configurable-slide-toggle';
import { SharedComponent } from './../../../shared/shared';
import { CodeFiles } from './../../../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'slide-toggle-docs-examples',
    templateUrl: './exampleslidetoggle.component.html'
})
export class DocsExampleSlideToggle implements OnInit {
    slideToggleConfig: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Slide Toggle > Examples');}
    ngOnInit(){
        this.slideToggleConfig = {
            highlightPath: [
                'assets/highlighted/configurable-slide-toggle-html.html',
                'assets/highlighted/configurable-slide-toggle-ts.html'
            ],
            filePath: [
                'assets/examples/slide-toggle/configurable-slide-toggle.html',
                'assets/examples/slide-toggle/configurable-slide-toggle.ts'
            ],
            componentName: ConfigurableSlideToggleComponent
        }
    }
}