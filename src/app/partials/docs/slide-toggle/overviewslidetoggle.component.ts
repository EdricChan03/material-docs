import { SharedComponent } from './../../../shared/shared.docs';
import { SimpleSlideToggleComponent } from './../../../../assets/examples/slide-toggle/simple-slide-toggle';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'slide-toggle-docs-overview',
    templateUrl: './overviewslidetoggle.component.html'
})
export class DocsOverviewSlideToggle implements OnInit {
    simpleSlideToggle: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Slide Toggle > Overview');}
    ngOnInit(){
        this.simpleSlideToggle = {
            highlightPath: [
                'assets/highlighted/simple-slide-toggle-html.html',
                'assets/highlighted/simple-slide-toggle-ts.html',
            ],
            filePath: [
                'assets/examples/slide-toggle/simple-slide-toggle.html',
                'assets/examples/slide-toggle/simple-slide-toggle.ts'
            ],
            componentName: SimpleSlideToggleComponent
        }
    }
}