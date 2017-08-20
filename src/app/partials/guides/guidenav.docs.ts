import { Router } from '@angular/router';
import { SharedComponent } from '../../shared/shared.docs';
import { Component, AfterContentChecked } from '@angular/core';
@Component({
    selector: 'guide-docs-nav',
    templateUrl: './guidenav.docs.html'
})

export class DocsGuideNav implements AfterContentChecked{
    isMain: boolean = true;
    guides: Guides[] = [
        {
            text: 'Getting Started',
			link: 'getting-started',
			icon: 'help'
        },
        {
            text: 'Theming Angular Material',
			link: 'theming',
			icon: 'palette'
		},
		{
			text: "Theming your components",
			link: 'theming-your-components',
			icon: 'palette'
		}
    ]
    constructor(private shared: SharedComponent, private router: Router){
        shared.setTitle('Docs > Guides');
    }
    ngAfterContentChecked() {
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
	icon: string;
}