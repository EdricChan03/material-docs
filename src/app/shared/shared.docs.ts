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
	 * @deprecated
     */
	public fragRoute(id: string) {
		this.sectionScroll = id;
		this.router.navigate([], { fragment: id });
		this.doScroll();
	}
    /**
     * Scrolls to the fragment specified in the URL (now deprecated, will be removed soon)
     * @deprecated
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
			this.title.setTitle('Angular Material Docs');
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
				codeTabIndent: 1,
				latestCommit: true
			}
		}
		return settings;
	}
    /**
     * Gets the `Settings` as an `Observable`.
     * @todo Figure out how this works
     * @deprecated
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
	/**
	 * Whether to show the latest commit card
	 * @type {boolean}
	 */
	latestCommit: boolean;
}
export interface APIProperties {
	/**
	 * Whether the property is an `@Input()`
	 * @type {boolean}
	 */
	isInput?: boolean;
	/**
	 * Whether the property is an `@Output()`
	 * @type {boolean}
	 */
	isOutput?: boolean;
	/**
	 * The name of the property
	 * @type {string}
	 */
	name: string;
	/**
	 * The description of the property
	 * @type {string}
	 */
	desc: string;
	/**
	 * The alias for the property (typically used within an `@Input()`)
	 * @type {string}
	 */
	alias?: string;
	/**
	 * Whether the property's description is HTML
	 * @type {boolean}
	 */
	isHtml?: boolean;
	/**
	 * Whether the property is depreceated
	 * @type {boolean}
	 */
	isDepreceated?: boolean;
}
export interface APIMethods {
	/**
	 * Whether the method's description is HTML
	 * @type {boolean}
	 */
	isHtml?: boolean;
	/**
	 * The name of the method
	 * @type {string}
	 */
	name: string;
	/**
	 * The description of the method
	 * @type {string}
	 */
	desc: string;
	/**
	 * The params of the method
	 * @type {APIMethodParams[] | APIMethodParams}
	 */
	params?: APIMethodParams[] | APIMethodParams;
	/**
	 * The return(s) of the method
	 * @type {APIMethodReturns[] | APIMethodReturns}
	 */
	returns?: APIMethodReturns[] | APIMethodReturns;
}
export interface APIMethodParams {
	/**
	 * The name of the param
	 * @type {string}
	 */
	name: string;
	/**
	 * The type of the param
	 * @type {string}
	 */
	type?: string;
	/**
	 * The description of the param
	 * @type {string}
	 */
	desc?: string;
	/**
	 * Whether the method's description is HTML
	 * @type {boolean}
	 */
	isHtml?: boolean;
}
export interface APIMethodReturns {
	/**
	 * The name of the return
	 * @type {string}
	 */
	name: string;
	/**
	 * The type of the return
	 * @type {string}
	 */
	type?: string;
	/**
	 * The description of the return
	 * @type {string}
	 */
	desc?: string;
	/**
	 * Whether the method's description is HTML
	 * @type {boolean}
	 */
	isHtml?: boolean;
}