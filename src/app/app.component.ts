import { PreferencesDialog } from './partials/preferences.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { SharedComponent } from './shared/shared';
import { Router } from '@angular/router';
import { Component, AfterContentChecked } from '@angular/core';
import 'hammerjs';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";
import { MdSidenav, MdDialog, OverlayContainer, MdDialogRef } from "@angular/material";
@Component({
    selector: 'material2-docs',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentChecked {
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
	 * Whether the external docs exist for the page
	 * @type {boolean}
	 */
	isExtDocsExist: boolean = true;
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
                { id: 'autocomplete', name: 'Autocomplete', examples: ['autocomplete-overview'] },
                { id: 'checkbox', name: 'Checkbox', examples: ['checkbox-configurable'] },
                { id: 'datepicker', name: 'Datepicker', examples: ['datepicker-overview'] },
                { id: 'input', name: 'Input', examples: ['input-form'] },
                { id: 'radio', name: 'Radio button', examples: ['radio-ng-model'] },
                { id: 'select', name: 'Select', examples: ['select-form'] },
                { id: 'slider', name: 'Slider', examples: ['slider-configurable'] },
                { id: 'slide-toggle', name: 'Slide toggle', examples: ['slide-toggle-configurable'] },
            ]
        },
        {
            id: 'nav',
            name: 'Navigation',
            summary: 'Sidenavs, toolbars, menus',
            items: [
                { id: 'menu', name: 'Menu', examples: ['menu-icons'] },
                { id: 'sidenav', name: 'Sidenav', examples: ['sidenav-fab'] },
                { id: 'toolbar', name: 'Toolbar', examples: ['toolbar-multirow'] },
            ]
        },
        {
            id: 'layout',
            name: 'Layout',
            summary: 'Lists, grid-lists, cards',
            items: [
                { id: 'list', name: 'List', examples: ['list-sections'] },
                { id: 'grid-list', name: 'Grid list', examples: ['grid-list-dynamic'] },
                { id: 'card', name: 'Card', examples: ['card-fancy'] },
                { id: 'tabs', name: 'Tabs', examples: ['tabs-template-label'] },
            ]
        },
        {
            id: 'buttons',
            name: 'Buttons, Indicators & Icons',
            summary: 'Buttons, button toggles, icons, progress spinners, progress bars',
            items: [
                { id: 'button', name: 'Button', examples: ['button-types'] },
                { id: 'button-toggle', name: 'Button toggle', examples: ['button-toggle-exclusive'] },
                { id: 'chips', name: 'Chips', examples: ['chips-stacked'] },
                { id: 'icon', name: 'Icon', examples: ['icon-svg'] },
                {
                    id: 'progress-spinner', name: 'Progress spinner',
                    examples: ['progress-spinner-configurable']
                },
                { id: 'progress-bar', name: 'Progress bar', examples: ['progress-bar-configurable'] },
            ]
        },
        {
            id: 'modals',
            name: 'Popups & Modals',
            summary: 'Dialogs, tooltips, snackbars',
            items: [
                { id: 'dialog', name: 'Dialog', examples: ['dialog-result'] },
                { id: 'tooltip', name: 'Tooltip', examples: ['tooltip-position'] },
                { id: 'snack-bar', name: 'Snackbar', examples: ['snack-bar-component'] },
            ]
        },
        {
            id: 'tables',
            name: 'Data table',
            summary: 'Tables, sorting, and pagination',
            items: [
                {
                    id: 'table', name: 'Table',
                    examples: ['table-filtering', 'table-pagination', 'table-sorting']
                },
                { id: 'sort', name: 'Sort header', examples: ['sort-overview'] },
                { id: 'paginator', name: 'Paginator', examples: ['paginator-configurable'] },
            ]
        }
    ];
    constructor(media: ObservableMedia, private router: Router, private shared: SharedComponent, private dialog: MdDialog, private overlay: OverlayContainer) {
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
	 * Open the docs in the real docs
	 */
    openInExtDocs() {
        alert("Please ensure that you enable popups before continuing.")
        window.open('https://material.angular.io' + this.router.url, '_blank');
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
    ngAfterContentChecked() {
        let element = document.querySelector('material2-docs');
        element.classList.add(this.checkIsDark() ? 'docs-dark' : 'docs-light');
        this.overlay.themeClass = this.checkIsDark() ? 'docs-dark' : 'docs-light';
        this.docTitle = this.shared.getTitle();
        if (this.router.url.indexOf('components') > -1) {
            this.isComponentsPage = true;
        } else {
            this.isComponentsPage = false;
            if (this.componentSidenav._isOpened) { this.componentSidenav.close(); }
        }
        if (this.router.url.indexOf('search') > -1 || this.router.url.indexOf('misc') > -1 || this.router.url.indexOf('showcases') > -1 || this.router.url.indexOf('examples') > -1) {
            this.isExtDocsExist = false;
        }
    }
}

@Component({
	selector: 'docs-about',
	template: `<h3 md-dialog-title>About</h3>
				 <md-dialog-content fxLayout="column">
				  	<p>Have you always wondered how to actually setup Angular Material? Find that the docs are not clear? Then read this documentation!</p>
					<p>This docs was meant to help those who either don't understand about this or need more examples.</p>
					<p><em>Note:</em> I'm now inviting contributors to contribute to this document. Simply click on view source code below and go to issues and ask!</p>
					<p>Alternatively, you may want to do a pull request with your changes.</p>
				</md-dialog-content>
				<md-dialog-actions align="end">
					<a md-button color="accent" class="docs-btn" href="https://github.com/Chan4077" target="_blank" md-dialog-close>View Author</a>
					<a md-button color="accent" class="docs-btn" href="https://github.com/Chan4077/material2-docs" target="_blank" md-dialog-close>View Source Code</a>
					<button md-button md-dialog-close class="docs-btn">Close</button>
				</md-dialog-actions>
			  `	
})
export class AboutDialog {
	constructor(private dialogRef: MdDialogRef<AboutDialog>){}
	viewSourceCode() {
		if (confirm("Are you sure you want to go to the source code?")) {
			window.open('');
			this.dialogRef.close();
        } else {
            console.error('User clicked cancel.');
        }
	}
}