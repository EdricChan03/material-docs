import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class SharedComponent {
    private sectionScroll: string;
    constructor(private router: Router, private title: Title){}
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
}