import { Router, NavigationEnd } from '@angular/router';
import { SharedComponent } from './../../../shared/shared.docs';
import { ConfigurableTooltipExample } from './../../../../assets/examples/tooltip/configurable-tooltip';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tooltip-docs-examples',
    templateUrl: './exampletooltip.component.html'
})

export class DocsExampleTooltip implements OnInit {
    tooltipConfig: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent){shared.setTitle('Docs > Tooltip > Examples');}
    ngOnInit() {
        this.tooltipConfig = {
            filePath: [
                'assets/examples/tooltip/configurable-tooltip.html',
                'assets/examples/tooltip/configurable-tooltip.ts',
                'assets/examples/tooltip/configurable-tooltip.css',
            ],
            highlightPath: [
                'assets/highlighted/configurable-tooltip-html.html',
                'assets/highlighted/configurable-tooltip-ts.html',
                'assets/highlighted/configurable-tooltip-css.html'
            ],
			componentName: ConfigurableTooltipExample,
			url: "tooltip/tooltip-configurable"
        }
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.shared.doScroll();
        });
    }
}