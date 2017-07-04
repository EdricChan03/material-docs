import { ButtonTooltipComponent } from './../../assets/examples/button/button-tooltip';
import { Files } from './../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tooltip-docs-examples',
    templateUrl: './exampletooltip.component.html'
})

export class DocsExampleTooltip implements OnInit {
    buttonTooltip: Files;
    ngOnInit() {
        this.buttonTooltip = {
            fileName: [
                'button-tooltip.html',
                'button-tooltip.ts',
                'button-tooltip.css'
            ],
            highlightPath: [
                'assets/highlighted/button-tooltip-html.html',
                'assets/highlighted/button-tooltip-ts.html',
                'assets/highlighted/button-tooltip-css.html'
            ],
            componentName: ButtonTooltipComponent
            }
    }
}