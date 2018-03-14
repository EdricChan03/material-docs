import { DocumentationItems } from './partials/documentation-items';
import { PreferencesDialog } from './partials/preferences.docs';
import { AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { SharedComponent } from './shared/shared.docs';
import { Router } from '@angular/router';
import { Component, AfterContentChecked } from '@angular/core';
import 'hammerjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { OverlayContainer } from '@angular/cdk/overlay';
import { VERSION } from '@angular/material';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'material-docs',
	templateUrl: './app.component.html',
	animations: [
		trigger('searchState', [
			state('inactive', style({
				right: '325px'
			})),
			state('active', style({
				right: '0%'
			})),
			transition('inactive => active', animate('250ms')),
			transition('active => inactive', animate('250ms'))
		]),
		trigger('searchFieldState', [
			state('active', style({
				display: 'none'
			})),
			state('inactive', style({
				display: 'inline-block'
			})),
			transition('inactive => active', animate('250ms')),
			transition('active => inactive', animate('250ms'))
		]),
		trigger('searchBtnState', [
			state('active', style({
				display: 'none'
			})),
			state('inactive', style({
				display: 'block',
				left: '40px'
			})),
			transition('inactive => active', animate('250ms')),
			transition('active => inactive', animate('250ms'))
		])
	]
})
export class AppComponent implements AfterContentChecked, OnInit {
	/**
	 * The component sidenav
	 * @type {MatSidenav}
	 */
	@ViewChild('componentSidenav') componentSidenav: MatSidenav;
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
	categories = [];
	/**
	 * Whether to show the latest commit card
	 */
	showLatestCommit: boolean;
	/**
	 * The latest commit json
	 * @todo Remove the following after
	 */
	latestCommit: any;
	/**
	 * @todo Remove
	 */
	latestCommitCommit: any;
	/**
	 * @todo Remove
	 */
	latestCommitCommitAuthor: any;
	/**
	 * Whether the commit is refreshing
	 */
	isRefreshing: boolean;
	searchActive: string = "active";
	showToolbar: boolean;
	searchDoc: string;
	constructor(media: ObservableMedia, private router: Router, private shared: SharedComponent, private dialog: MatDialog, private overlay: OverlayContainer, private http: HttpClient, private meta: Meta, private docItems: DocumentationItems) {
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
		this.categories = this.docItems.getItemsInCategories();
	}
	/**
	 * Searches the docs (basically just redirects to the search URL)
	 * @param {string} term The term to search up
	 */
	searchDocs(term: string) {
		if (term != undefined && term || term != null && term) {
			this.router.navigate(['search', { name: term }])
		} else {
			alert("Please enter a valid search item.");
		};
	}
	toggleSearch() {
		if (this.searchActive == "inactive") {
			this.searchActive = "active";
		} else {
			this.searchActive = "inactive";
		}
	}
	/**
	 * Refreshes the commit
	 */
	refresh() {
		this.isRefreshing = true;
		this.http.get("https://api.github.com/repos/Chan4077/material-docs/commits")
			.delay(1000)
			.subscribe(res => {
				this.latestCommit = res[0];
				this.latestCommitCommit = res[0].commit;
				this.latestCommitCommitAuthor = res[0].commit.committer;
				this.isRefreshing = false;
			});
	}
	/**
	 * Views the project on Github
	 */
	viewOnGithub() {
		if (confirm("Are you sure you want to go to the source code?")) {
			window.open('https://github.com/Chan4077/material-docs');
		} else {
			console.error('User clicked cancel.');
		}
	};
	/**
	 * Opens the {@link PreferencesDialog}
	 */
	openPrefs() {
		this.dialog.open(PreferencesDialog);
	}
	/**
	 * Toggles the theme
	 */
	toggleTheme() {
		this.isDark = !this.isDark;
		let overlayEl = this.overlay.getContainerElement();
		let element = document.querySelector('material-docs');
		if (!this.checkIsDark()) {
			if (overlayEl.classList.contains('docs-light')) {
				overlayEl.classList.remove('docs-light');
			}
			overlayEl.classList.add('docs-dark');
			if (element.classList.contains('docs-light')) {
				element.classList.remove('docs-light');
			}
			element.classList.add('docs-dark');
			this.meta.addTag({ name: "theme-color", content: "" })
		} else {
			if (overlayEl.classList.contains('docs-dark')) {
				overlayEl.classList.remove('docs-dark');
			}
			overlayEl.classList.add('docs-light');
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
	openLicense() {
		this.dialog.open(LicenseDialog);
	}
	ngOnInit() {
		if (this.shared.getSettings().latestCommit) {
			this.showLatestCommit = true;
			this.refresh();
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
		let element = document.querySelector('material-docs');
		element.classList.add(this.checkIsDark() ? 'docs-dark' : 'docs-light');
		this.overlay.getContainerElement().classList.add(this.checkIsDark() ? 'docs-dark' : 'docs-light');
		this.docTitle = this.shared.getTitle();
		if (this.router.url.indexOf('components') > -1) {
			this.isComponentsPage = true;
		} else {
			this.isComponentsPage = false;
			if (this.componentSidenav.opened) { this.componentSidenav.close(); }
		}
		if (this.router.url.indexOf('examples') > -1) {
			this.showToolbar = false;
		} else {
			this.showToolbar = true;
		}
	}
}

@Component({
	selector: 'docs-about',
	template: `<h3 matDialogTitle>About</h3>
				 <mat-dialog-content fxLayout="column">
				  	<p>Have you always wondered how to actually setup Angular Material? Find that the docs are not clear? Then read this documentation!</p>
					<p>This docs was meant to help those who either don't understand about this or need more examples.</p>
					<p><em>Note:</em> I'm now inviting contributors to contribute to this document. Simply click on view source code below and go to issues and ask! Alternatively, you may want to do a pull request with your changes.</p>
					<small>This docs site is currently running version <code class="docs-code">{{version.full}}</code> (master)</small>
				</mat-dialog-content>
				<mat-dialog-actions align="end">
					<a mat-button color="accent" class="docs-btn" href="https://github.com/Chan4077/material-docs" target="_blank" matDialogClose>View Source Code</a>
					<button mat-button matDialogClose class="docs-btn" color="primary">Close</button>
				</mat-dialog-actions>
			  `
})
export class AboutDialog {
	constructor(private dialogRef: MatDialogRef<AboutDialog>) { }
	get version() {
		return VERSION;
	}
}

@Component({
	selector: 'docs-license',
	template: `<h3 matDialogTitle>License</h3>
				<mat-dialog-content fxLayout="row">
					<code>{{license}}</code>
				</mat-dialog-content>
				<mat-dialog-actions align="end">
				<button matDialogClose mat-button class="docs-btn" color="primary">Close</button>
				</mat-dialog-actions>
				`
})
export class LicenseDialog implements OnInit {
	license: string;
	constructor(private http: HttpClient, private dialogRef: MatDialogRef<LicenseDialog>) { }

	ngOnInit() {
		this.http.get('/assets/LICENSE', {responseType: 'text'}).subscribe(res => {
			this.license = res;
		})
	}
}