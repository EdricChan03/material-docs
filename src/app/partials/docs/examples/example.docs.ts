import { Router, NavigationEnd } from '@angular/router';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, AfterContentChecked } from "@angular/core";

@Component({
	selector: 'docs-examples',
	templateUrl: './example.docs.html'
})
export class DocsExamples implements AfterContentChecked{
	examples = [
		{
			title: "Blog",
			url: "blog"
		},
		{
			title: "Shop",
			url: "shop"
		}
	]
	isExampleMain: boolean;
	constructor(private shared: SharedComponent, private router: Router){
		shared.setTitle("Docs > Examples");
	}
	ngAfterContentChecked() {
		if (this.router.url.indexOf("main")) {
			this.isExampleMain = true;
			
		} else {
			this.isExampleMain = false;
		}
	}
}