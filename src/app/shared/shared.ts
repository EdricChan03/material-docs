import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SharedComponent {
    private sharedLog = new Subject<Settings>();
    private sectionScroll: string;
    constructor(private router: Router, private title: Title) { }
    /**
     * Routing
     * @param {string} id The route fragment
     */
    public fragRoute(id: string) {
        this.sectionScroll = id;
        this.router.navigate([], { fragment: id });
        this.doScroll();
    }
    /**
     * Does a scroll
     * @todo Make this work
     * @beta
     */
    public doScroll() {

        if (!this.sectionScroll) {
            return;
        }
        try {
            var elements = document.getElementById(this.sectionScroll);

            elements.scrollIntoView();
        }
        finally {
            this.sectionScroll = null;
        }
    }
    /**
     * Sets the document's title via @angular/platform-broswer's `Title`
     * @param {string} title The document's title (optional)
     */
    public setTitle(title?: string) {
        if (title) {
            this.title.setTitle(title);
        } else {
            this.title.setTitle('Material2 Docs');
        }
    }
    /**
     * Gets the document's title
     * @returns {string}
     */
    public getTitle(): string {
        return this.title.getTitle();
    }
    /**
     * Gets the settings
     * @returns {Settings}
     */
    public getSettings(): Settings {
        let settings: Settings;
        if (window.localStorage.getItem('settings')) {
            settings = JSON.parse(window.localStorage.getItem('settings'));
        } else {
            settings = {
                codeSpaceIndent: 4,
                codeTabIndent: 1
            }
        }
        return settings;
    }
    /**
     * Gets the `Settings` as an `Observable`.
     * @todo Figure out how this works
     * @beta (Do not use yet!)
     */
    public getSettingsObservable(): Observable<Settings> {
        return this.sharedLog.asObservable();
    }
    /**
     * Sets the settings
     * @param {Settings} settings The settings
     */
    public setSettings(settings: Settings) {
        //console.log(settings);
        window.localStorage.setItem('settings', JSON.stringify(settings));
        //this.sharedLog.next(settings);
    }
}
export interface Settings {
    /**
     * Code indent (spaces)
     * @type {number|any}
     */
    codeSpaceIndent?: number | any;
    /**
     * Whether to enable tab indent
     * @type {boolean}
     */
    enableTabIndent?: boolean;
    /**
     * Code indent (tabs)
     * @type {number|any}
     */
    codeTabIndent?: number | any;
}
export interface APIProperties {
    isInput?: boolean;
    isOutput?: boolean;
    name: string;
    desc: string;
    alias?: string;
    isHtml?: boolean;
    isDepreceated?: boolean;
}
export interface APIMethods {
    isHtml?: boolean;
    name: string;
    desc: string;
}