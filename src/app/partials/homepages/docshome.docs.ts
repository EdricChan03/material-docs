import { Router } from '@angular/router';
import { SharedComponent } from './../../shared/shared.docs';
import { Component, AfterContentChecked } from '@angular/core';

@Component({
    selector: 'docshome-component',
    templateUrl: './docshome.docs.html'
})

export class DocsHomePage implements AfterContentChecked {
    constructor(private shared: SharedComponent, private router: Router){}
    isHomePage: boolean;
    ngAfterContentChecked() {
        if (this.router.url == '/components') {
            this.shared.setTitle('Docs > Components');
            this.isHomePage = true;
        } else {
            this.isHomePage = false;
        }
    }
}