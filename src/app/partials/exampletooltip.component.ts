import { Router, NavigationEnd } from '@angular/router';
import { SharedComponent } from './../shared/routing.shared';
import { TooltipPositionComponent } from './../../assets/examples/tooltip/tooltip-position';
import { ButtonTooltipComponent } from './../../assets/examples/tooltip/button-tooltip';
import { Files } from './../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tooltip-docs-examples',
    templateUrl: './exampletooltip.component.html'
})

export class DocsExampleTooltip implements OnInit {
    buttonTooltip: Files;
    tooltipPos: Files;
    constructor(private router: Router, private shared: SharedComponent){}
    ngOnInit() {
        document.title = "Docs > Tooltip > Examples";
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
        this.tooltipPos = {
            fileName: [
                'tooltip-position.html',
                'tooltip-position.ts',
                'tooltip-position.css'
            ],
            highlightPath: [
                'assets/highlighted/tooltip-position-html.html',
                'assets/highlighted/tooltip-position-ts.html',
                'assets/highlighted/tooltip-position-css.html'
            ],
            componentName: TooltipPositionComponent
        }
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.shared.doScroll();
        });
    }
}