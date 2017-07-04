import { ButtonOverviewComponent } from './../../assets/examples/button/button-overview';
import { ButtonTypesComponent } from './../../assets/examples/button/button-types';
import { Files } from './../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'button-docs-overview',
    templateUrl: './overviewbutton.component.html'
})
export class DocsOverviewBtn implements OnInit {
    buttonTypes: Files;
    buttonOverview: Files;
    ngOnInit() {
        document.title = "Docs > Button > Overview";
        this.buttonOverview = {
                fileName: [
                    'button-overview.html',
                    'button-overview.ts',
                    'button-overview.css'
                ],
                highlightPath: [
                    'assets/highlighted/button-overview-html.html',
                    'assets/highlighted/button-overview-ts.html',
                    'assets/highlighted/button-overview-css.html'
                ],
                componentName: ButtonOverviewComponent
            }
        this.buttonTypes = {
                fileName: [
                    'button-types.html',
                    'button-types.ts',
                    'button-types.css'
                ],
                highlightPath: [
                    'assets/highlighted/button-types-html.html',
                    'assets/highlighted/button-types-ts.html',
                    'assets/highlighted/button-types-css.html'
                ],
                componentName: ButtonTypesComponent

            }

    }
}