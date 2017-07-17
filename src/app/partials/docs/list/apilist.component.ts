import { APIProperties, SharedComponent, APIMethods } from './../../../shared/shared';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'list-docs-api',
    templateUrl: './apilist.component.html'
})
export class DocsAPIList implements OnInit {
    properties: APIProperties[];
    listItemProperties: APIProperties[];
    listItemMethods: APIMethods[];
    constructor(private shared: SharedComponent){shared.setTitle('Docs > List > API');}
    ngOnInit() {
        this.properties = [
            {
                isInput: true,
                name: "disableRipple",
                isHtml: true,
                desc: "Whether the ripple effect should be disabled on the list-items or not. This flag only has an effect for <code>md-nav-list</code> components."
            }
        ]
        this.listItemProperties = [
            {
                isInput: true,
                name: "disableRipple",
                isHtml: true,
                desc: "Whether the ripple effect on click should be disabled. This applies only to list items that are part of a nav list. The value of <code>disableRipple</code> on the <code>md-nav-list</code> overrides this flag."
            }
        ]
        this.listItemMethods = [
            {
                name: "isRippleEnabled",
                desc: "Whether this list item should show a ripple effect when clicked."
            }
        ]
    }
}