import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class SharedComponent {
    private sectionScroll: string;
    constructor(private router: Router, private title: Title){}
    public fragRoute(id: string) {
        this.sectionScroll = id;
        this.router.navigate([], { fragment: id });
        this.doScroll();
    }
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
    public getTitle(): string {
        return this.title.getTitle();
    }
}