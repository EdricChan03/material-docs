import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'docs-header',
	templateUrl: './header.docs.html'
})
export class DocsHeader implements OnInit {
	rootUrl: string;
	url: string;
	@Input() private link: string;
	constructor(private router: Router) {
		this.rootUrl = router.url.split('#')[0];
	}

	ngOnInit() {
		this.url = `${this.rootUrl}#${this.link}`;
	}
}