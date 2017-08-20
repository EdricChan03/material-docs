import { MdDialogRef, MdDialog } from '@angular/material';
import { SharedComponent } from './../../shared/shared.docs';
import { DocsMiscOnboarding, DocsMiscSvgicons, DocsMiscCustomization } from './docs/misc';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';
import * as hljs from 'highlight.js';
@Component({
	selector: 'docs-misc-list',
	templateUrl: './misclist.docs.html'
})
export class DocsMiscList implements OnInit {
	docs: DocumentsListMisc[];
	constructor(private shared: SharedComponent, private router: Router, private dialog: MdDialog) { shared.setTitle("Docs > Misc") }
	navigateTo(filename: string) {
		this.router.navigate(['/misc', filename]);
	}
	viewMore(doc: any) {
		let dialogRef = this.dialog.open(DocsMiscMoreDialog);
		dialogRef.componentInstance.data = doc;
	}
	ngOnInit() {
		this.docs = [
			{
				name: "SVG icons",
				icon: "icons:vector-square",
				isSvgIcon: true,
				filename: "svgicons"
			},
			{
				name: "Onboarding",
				icon: "star",
				filename: "onboarding",
				isSvgIcon: false,
				moreinfo: [
					{ url: "https://material.io/guidelines/growth-communications/onboarding.html", title: "Material.io > Guidelines" }
				]
			},
			{
				name: "Component Customization",
				icon: "extension",
				isSvgIcon: false,
				filename: "component-customize"
			}
		]
	}
}

@Component({
	selector: 'docs-misc',
	template: `<table-of-contents></table-of-contents>
	<ng-template #docMisc></ng-template>`
})
export class DocsMisc implements OnInit {
	constructor(private route: ActivatedRoute, private router: Router, private resolver: ComponentFactoryResolver) {
		router.events.subscribe(ev => {
			if (ev instanceof NavigationEnd) {
				this.route.paramMap
					.subscribe(result => this.docUrl = result.get('id'));
			}
		})
	}
	docUrl: string;
	factory: any;
	@ViewChild('docMisc', { read: ViewContainerRef }) docMiscContainer: ViewContainerRef;
	ngOnInit() {
		console.log(this.docUrl);
		switch (this.docUrl) {
			case 'onboarding':
				this.factory = this.resolver.resolveComponentFactory(DocsMiscOnboarding);
				break;
			case 'svgicons':
				this.factory = this.resolver.resolveComponentFactory(DocsMiscSvgicons);
				break;
			case 'component-customize':
				this.factory = this.resolver.resolveComponentFactory(DocsMiscCustomization);
				break;
		}
		this.docMiscContainer.createComponent(this.factory);
	}
}
@Component({
	selector: 'docs-misc-more-dialog',
	template: `
		<h3 md-dialog-title>More info</h3>
		<div md-dialog-content>
			<md-nav-list>
				<a md-list-item *ngFor="let more of data" [href]="more.url" target="_blank">
					<p md-line>{{more.title}}</p>
				</a>
			</md-nav-list>
		</div>
		<div md-dialog-actions align="end">
			<button md-button md-dialog-close class="docs-btn" color="primary">Close</button>
		</div>
	`
})
export class DocsMiscMoreDialog {
	public data: any;
	constructor(private dialogRef: MdDialogRef<DocsMiscMoreDialog>){}
}
export interface DocumentsListMisc {
	/**
	 * The name of the document
	 * @type {string}
	 */
	name: string;
	/**
	 * The icon of the document (optional)
	 * @type {string}
	 */
	icon?: string;
	/**
	 * Whether the icon is an SVG icon (Optional)
	 * @desc Leave blank to specify that this icon is part of Google's Material Design Icons
	 * @type {boolean}
	 */
	isSvgIcon?: boolean;
	/**
	 * The file name of the document
	 * @desc This is used for the switch case in {@link DocsMisc#ngOnInit} to load a component dynamically
	 * @type {string}
	 */
	filename: string;
	/**
	 * Other relevant information for the document (Optional)
	 * @type {string}
	 */
	moreinfo?: DocumentsListMoreInfo[];
}
export interface DocumentsListMoreInfo {
	/**
	 * The title for the more info
	 * @type {string}
	 */
	title: string;
	/**
	 * The description for the more info
	 * @type {string}
	 */
	desc?: string;
	/**
	 * The url of the more info
	 * @type {string}
	 */
	url?: string;
}