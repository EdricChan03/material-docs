import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { SharedComponent } from './../../../shared/shared';
import { ButtonOverviewComponent } from './../../../../assets/examples/button/button-overview';
import { ButtonTypesComponent } from './../../../../assets/examples/button/button-types';
import { CodeFiles } from './../../../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'button-docs-overview',
    templateUrl: './overviewbutton.component.html'
})
export class DocsOverviewBtn implements OnInit {
    buttonOverview: CodeFiles;
    constructor(private router: Router, private shared: SharedComponent){
        shared.setTitle('Docs > Button > Overview');
    }
    ngOnInit() {
        this.buttonOverview = {
            filePath: [
                'assets/examples/button/button-overview.html',
                'assets/examples/button/button-overview.ts'
            ],
            fileLabel: [
                'button-overview.html',
                'button-overview.ts'
            ],
            highlightPath: [
                'assets/highlighted/button-overview-html.html',
                'assets/highlighted/button-overview-ts.html'
            ],
            componentName: ButtonOverviewComponent
        }
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.shared.doScroll();
        });
    }
}