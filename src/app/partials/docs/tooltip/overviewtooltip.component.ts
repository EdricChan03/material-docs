import { SimpleTooltipComponent } from './../../../../assets/examples/tooltip/simple-tooltip';
import { CodeFiles } from './../../../shared/example-viewer.component';
import { SharedComponent } from './../../../shared/shared';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tooltip-docs-overview',
    templateUrl: './overviewtooltip.component.html'
})

export class DocsOverviewTooltip implements OnInit {
    simpleTooltip: CodeFiles;
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Tooltip > Overview');}
    ngOnInit() {
        this.simpleTooltip = {
            fileLabel: [
                'simple-tooltip.html',
                'simple-tooltip.ts'
            ],
            filePath: [
                'assets/examples/tooltip/simple-tooltip.html',
                'assets/examples/tooltip/simple-tooltip.ts'
            ],
            highlightPath: [
                'assets/highlighted/simple-tooltip-html.html',
                'assets/highlighted/simple-tooltip-ts.html'
            ],
            componentName: SimpleTooltipComponent
        }
    }
}