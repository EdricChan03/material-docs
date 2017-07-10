import { AfterViewInit, ViewChild } from '@angular/core';
import { SharedComponent } from './shared/shared';
import { Router } from '@angular/router';
import { Component, AfterContentChecked } from '@angular/core';
import 'hammerjs';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";
import { MdSidenav } from "@angular/material";
@Component({
    selector: 'material2-docs',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentChecked {
    @ViewChild('componentSidenav') componentSidenav: MdSidenav;
    isComponentsPage: boolean;
    isSearchToggled: boolean = false;
    docTitle: string;
    isExtDocsExist: boolean = true;
    currentUrl: string;
    sidenavModeWatcher: Subscription;
    activeMediaQuery: string = "";
    sidenavMode: string = "side";
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
    constructor(media: ObservableMedia, private router: Router, private shared: SharedComponent) {
        this.sidenavModeWatcher = media.subscribe((change: MediaChange) => {
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
            if (change.mqAlias == 'xs') {
                this.sidenavMode = "over";
            } else {
                this.sidenavMode = "side";
            }
        })
    }
    openInExtDocs() {
        this.currentUrl = this.router.url;
        alert("Please ensure that you enable popups before continuing.")
        window.open('https://material.angular.io' + this.currentUrl, '_blank');
    }
    viewOnGithub() {
        alert("Redirecting to Github...");
        window.open('https://github.com/Chan4077/material2-docs')
    };
    toggleSearch() {
        this.isSearchToggled = !this.isSearchToggled;
    }
    clearSearch() {
        console.log('TODO');
    }
    ngAfterContentChecked() {
        this.docTitle = this.shared.getTitle();
        if (this.router.url.indexOf('components') > -1) {
            this.isComponentsPage = true;
        } else {
            this.isComponentsPage = false;
            if (this.componentSidenav._isOpened) { this.componentSidenav.close(); }
        }
    }
}
