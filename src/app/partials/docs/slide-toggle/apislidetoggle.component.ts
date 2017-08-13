import { SharedComponent, APIProperties, APIMethods } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'slide-toggle-docs-api',
    templateUrl: './apislidetoggle.component.html'
})
export class DocsAPISlideToggle implements OnInit{
    properties: APIProperties[];
    params: APIMethods[];
    slideToggleChange: APIProperties[];
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Slide Toggle > API');}
    ngOnInit() {
        this.properties = [
            {
                isInput: true,
                name: "name",
                desc: "Name value will be appilied to the input element if present"
            },
            {
                isInput: true,
                name: "id",
                desc: "A unique id for the slide-toggle input. If none is supplied, it will be auto-generated."
            },
            {
                isInput: true,
                name: "labelPosition",
                desc: "Whether the label should appear after or before the slide-toggle. Defaults to 'after'"
            },
            {
                isInput: true,
                name: "ariaLabel",
                desc: "Used to set the aria-label attribute on the underlying input element.",
                alias: "aria-label"
            },
            {
                isInput: true,
                name: "ariaLabelledBy",
                desc: "Used to set the aria-labelledby attribute on the underlying input element.",
                alias: "aria-labelledby"
            },
            {
                isInput: true,
                name: "required",
                desc: "Whether the slide toggle is required."
            },
            {
                isInput: true,
                name: "disableRipple",
                desc: "Whether the ripple effect for this slide-toggle is disabled."
            },
            {
                isOutput: true,
                name: "change",
                desc: "An event will be dispatched each time the slide-toggle changes its value."
            },
            {
                name: "inputId",
                desc: "Returns the uinique id for the visual hidden input."
            },
            {
                isInput: true,
                name: "checked",
                desc: "Whether the slide-toggle is checked."
            }
        ]
        this.params = [
            {
                name: "focus",
                desc: "Focuses the slide-toggle."
            },
            {
                name: "toggle",
                desc: "Toggles the checked state of the slide-toggle."
            }
        ]
        this.slideToggleChange = [
            {
                name: "source",
                desc: "The source of the slide toggle."
            },
            {
                name: "checked",
                desc: "Whether the slide-toggle is checked."
            }
        ]
    }
}