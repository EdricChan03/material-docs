import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { SharedComponent } from './../shared/routing.shared';
import { Files } from './../shared/example-viewer.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'icon-docs-overview',
    templateUrl: './overviewicon.component.html'
})

export class DocsOverviewIcon implements OnInit {
    constructor(private router: Router, private shared: SharedComponent){}
    ngOnInit() {
        document.title = "Docs > Icon > Overview";
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.shared.doScroll();
        });
    }
}