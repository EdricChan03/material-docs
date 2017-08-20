import { SharedComponent, APIProperties, APIMethods } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'button-docs-api',
	templateUrl: './apibutton.component.html'
})
export class DocsAPIBtn implements OnInit {
	properties: APIProperties[];
	methods: APIMethods[];
	constructor(private shared: SharedComponent){shared.setTitle("Docs > Button > API")}
	ngOnInit() {
		this.properties = [
			{
				isInput: true,
				name: "disableRipple",
				desc: "Whether the ripple effect for this button is disabled."
			},
			{
				isInput: true,
				isHtml: true,
				name: "color",
				desc: "<p>The color of this button.</p><p>Accepts <code class=\"docs-code\">primary</code>/ <code class=\"docs-code\">accent</code>/ <code class=\"docs-code\">warn</code></p>"
			}
		]
		this.methods = [
			{
				name: "focus",
				desc: "Focuses the button."
			}
		]
	}
}