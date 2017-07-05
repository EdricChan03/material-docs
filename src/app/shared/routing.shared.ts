import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class SharedComponent {
    private sectionScroll: string;
    constructor(private router: Router){}
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
}