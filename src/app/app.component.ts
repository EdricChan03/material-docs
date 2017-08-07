import { PreferencesDialog } from './partials/preferences.component';
import { AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { SharedComponent } from './shared/shared';
import { Router } from '@angular/router';
import { Component, AfterContentChecked } from '@angular/core';
import 'hammerjs';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";
import { MdSidenav, MdDialog, OverlayContainer, MdDialogRef } from "@angular/material";
import { Http } from "@angular/http";
@Component({
	selector: 'material2-docs',
	templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentChecked, OnInit {
	/**
	 * The component sidenav
	 * @type {MdSidenav}
	 */
	@ViewChild('componentSidenav') componentSidenav: MdSidenav;
	/**
	 * Whether the theme is dark
	 * @type {boolean}
	 */
	isDark: boolean;
	/**
	 * Whether the user is at a components page (aka `/components`)
	 * @type {boolean}
	 */
	isComponentsPage: boolean;
	/**
	 * The docs title
	 * @type {string}
	 */
	docTitle: string;
	/**
	 * The watcher for the sidenav mode
	 * @type {Subscription}
	 */
	sidenavModeWatcher: Subscription;
	/**
	 * The media query
	 * @type {string}
	 */
	activeMediaQuery: string = "";
	/**
	 * The sidenav mode
	 * @type {string}
	 */
	sidenavMode: string = "side";
	/**
	 * The categories for components
	 * @type {Array}
	 */
	categories = [
		{
			id: 'forms',
			name: 'Form Controls',
			summary: 'Radio buttons, checkboxes, input fields, sliders, slide toggles, selects',
			items: [
				{ id: 'autocomplete', name: 'Autocomplete' },
				{ id: 'checkbox', name: 'Checkbox' },
				{ id: 'datepicker', name: 'Datepicker' },
				{ id: 'input', name: 'Input' },
				{ id: 'radio', name: 'Radio button' },
				{ id: 'select', name: 'Select' },
				{ id: 'slider', name: 'Slider' },
				{ id: 'slide-toggle', name: 'Slide toggle' }
			]
		},
		{
			id: 'nav',
			name: 'Navigation',
			summary: 'Sidenavs, toolbars, menus',
			items: [
				{ id: 'menu', name: 'Menu' },
				{ id: 'sidenav', name: 'Sidenav' },
				{ id: 'toolbar', name: 'Toolbar' }
			]
		},
		{
			id: 'layout',
			name: 'Layout',
			summary: 'Cards, expansion panels, lists, grid-lists, tabs',
			items: [
				{ id: 'card', name: 'Card' },
				{ id: 'expansion', name: 'Expansion Panel' },
				{ id: 'grid-list', name: 'Grid list' },
				{ id: 'list', name: 'List' },
				{ id: 'tabs', name: 'Tabs' }
			]
		},
		{
			id: 'buttons',
			name: 'Buttons, Indicators & Icons',
			summary: 'Buttons, button toggles, icons, progress spinners, progress bars',
			items: [
				{ id: 'button', name: 'Button' },
				{ id: 'button-toggle', name: 'Button toggle' },
				{ id: 'chips', name: 'Chips' },
				{ id: 'icon', name: 'Icon' },
				{ id: 'progress-spinner', name: 'Progress spinner' },
				{ id: 'progress-bar', name: 'Progress bar' }
			]
		},
		{
			id: 'modals',
			name: 'Popups & Modals',
			summary: 'Dialogs, tooltips, snackbars',
			items: [
				{ id: 'dialog', name: 'Dialog' },
				{ id: 'tooltip', name: 'Tooltip' },
				{ id: 'snack-bar', name: 'Snackbar' }
			]
		},
		{
			id: 'tables',
			name: 'Data table',
			summary: 'Tables, sorting, and pagination',
			items: [
				{ id: 'table', name: 'Table' },
				{ id: 'sort', name: 'Sort header' },
				{ id: 'paginator', name: 'Paginator' }
			]
		}
	];
	/**
	 * Whether to show the latest commit card
	 */
	showLatestCommit: boolean;
	/**
	 * The latest commit json
	 */
	latestCommit: any;
	latestCommitCommit: any;
	latestCommitCommitAuthor: any;
	constructor(media: ObservableMedia, private router: Router, private shared: SharedComponent, private dialog: MdDialog, private overlay: OverlayContainer, private http: Http) {
		/**
		 * The watcher for the sidenav `mode`
		 */
		this.sidenavModeWatcher = media.subscribe((change: MediaChange) => {
			this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
			if (change.mqAlias == 'xs') {
				this.sidenavMode = "over";
			} else {
				this.sidenavMode = "side";
			}
		})
	}
	/**
	 * Views the project on Github
	 */
	viewOnGithub() {
		if (confirm("Are you sure you want to go to the source code?")) {
			window.open('https://github.com/Chan4077/material2-docs');
		} else {
			console.error('User clicked cancel.');
		}
	};
	/**
	 * Opens the @link{PreferencesDialog}
	 */
	openPrefs() {
		this.dialog.open(PreferencesDialog);
	}
	/**
	 * Toggles the theme
	 */
	toggleTheme() {
		this.isDark = !this.isDark;
		let element = document.querySelector('material2-docs');
		if (!this.checkIsDark()) {
			if (element.classList.contains('docs-light')) {
				element.classList.remove('docs-light');
			}
			element.classList.add('docs-dark');
			this.overlay.themeClass = 'docs-dark';
		} else {
			this.overlay.themeClass = 'docs-light';
			if (element.classList.contains('docs-dark')) {
				element.classList.remove('docs-dark');
			}
			element.classList.add('docs-light');
		}
		window.localStorage.setItem('darkTheme', JSON.stringify(this.isDark));
	}
	/**
	 * Checks whether the theme is toggled to dark
	 * @returns {boolean}
	 */
	checkIsDark(): boolean {
		let isDark: boolean;
		if (JSON.parse(window.localStorage.getItem('darkTheme'))) {
			isDark = JSON.parse(window.localStorage.getItem('darkTheme'));
		} else {
			isDark = false;
		}
		return isDark;
	}
	/**
	 * Opens the about dialog
	 */
	openAbout() {
		this.dialog.open(AboutDialog);
	}
	ngOnInit() {
		if (this.shared.getSettings().latestCommit) {
			this.showLatestCommit = true;
			this.http.get("https://api.github.com/repos/Chan4077/material2-docs/commits")
				.map(res => res.json())
				.subscribe(res => {
					this.latestCommit = res[0];
					this.latestCommitCommit = res[0].commit;
					this.latestCommitCommitAuthor = res[0].commit.committer;
				});
			/*
			Required params
			commit:
			  	committer: Author
					> name
			 		> date
				message
			html_url
			sha
			*/
		} else {
			this.showLatestCommit = false;
		}
	}
	ngAfterContentChecked() {
		let element = document.querySelector('material2-docs');
		element.classList.add(this.checkIsDark() ? 'docs-dark' : 'docs-light');
		this.overlay.themeClass = this.checkIsDark() ? 'docs-dark' : 'docs-light';
		this.docTitle = this.shared.getTitle();
		if (this.router.url.indexOf('components') > -1) {
			this.isComponentsPage = true;
		} else {
			this.isComponentsPage = false;
			if (this.componentSidenav.opened) { this.componentSidenav.close(); }
		}
	}
}

@Component({
	selector: 'docs-about',
	template: `<h3 md-dialog-title>About</h3>
				 <md-dialog-content fxLayout="column">
				  	<p>Have you always wondered how to actually setup Angular Material? Find that the docs are not clear? Then read this documentation!</p>
					<p>This docs was meant to help those who either don't understand about this or need more examples.</p>
					<p><em>Note:</em> I'm now inviting contributors to contribute to this document. Simply click on view source code below and go to issues and ask! Alternatively, you may want to do a pull request with your changes.</p>
				</md-dialog-content>
				<md-dialog-actions align="end">
					<a md-button color="accent" class="docs-btn" href="https://github.com/Chan4077" target="_blank" md-dialog-close>View Author</a>
					<a md-button color="accent" class="docs-btn" href="https://github.com/Chan4077/material2-docs" target="_blank" md-dialog-close>View Source Code</a>
					<button md-button md-dialog-close class="docs-btn" color="primary">Close</button>
				</md-dialog-actions>
			  `
})
export class AboutDialog {
	constructor(private dialogRef: MdDialogRef<AboutDialog>) { }
	viewSourceCode() {
		if (confirm("Are you sure you want to go to the source code?")) {
			window.open('');
			this.dialogRef.close();
		} else {
			console.error('User clicked cancel.');
		}
	}
}