import { Router } from '@angular/router';
import { SharedComponent } from '../../shared/shared';
import { Component, AfterViewChecked } from '@angular/core';
@Component({
    selector: 'guide-docs-nav',
    templateUrl: './guidenav.component.html'
})

export class DocsGuideNav implements AfterViewChecked{
    isMain: boolean = true;
    guides: Guides[] = [
        {
            text: 'Getting Started',
            link: 'getting-started'
        }
    ]
    constructor(private shared: SharedComponent, private router: Router){
        shared.setTitle('Docs > Guides');
    }
    ngAfterViewChecked() {
        if (this.router.url == '/guides') {
            this.isMain = true;
        } else {
            this.isMain = false;
        }
    }
}
interface Guides {
    text: string;
    link: string;
}