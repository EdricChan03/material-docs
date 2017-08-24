import { MdDialog, MdDialogRef } from '@angular/material';
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
		},
		{
			text: "Customizing component styles",
			link: "customizing-component-styles",
			icon: "extension"
		}
	]
	misc: DocumentsListMisc[] = [
		{
			name: "SVG icons",
			icon: "icons:vector-square",
			isSvgIcon: true,
			link: "svg-icons"
		},
		{
			name: "Onboarding",
			icon: "star",
			isSvgIcon: false,
			moreinfo: [
				{ url: "https://material.io/guidelines/growth-communications/onboarding.html", title: "Material.io > Guidelines" }
			],
			link: "onboarding"
		}
	]
    constructor(private shared: SharedComponent, private router: Router, private dialog: MdDialog){
        shared.setTitle('Docs > Guides');
	}
	viewMore(doc: any) {
		let dialogRef = this.dialog.open(DocsMiscMoreDialog);
		dialogRef.componentInstance.data = doc;
	}
    ngAfterContentChecked() {
        if (this.router.url == '/guides') {
            this.isMain = true;
        } else {
            this.isMain = false;
        }
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
	 * Other relevant information for the document (Optional)
	 * @type {string}
	 */
	moreinfo?: DocumentsListMoreInfo[];
	/**
	 * The URL of the document
	 * @type {string}
	 */
	link: string;
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
interface Guides {
    text: string;
	link: string;
	icon: string;
}