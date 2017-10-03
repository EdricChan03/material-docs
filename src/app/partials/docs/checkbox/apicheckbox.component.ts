import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent, APIProperties, APIMethods } from './../../../shared/shared.docs';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'checkbox-docs-api',
    templateUrl: './apicheckbox.component.html'
})
export class DocsAPICheckbox implements OnInit {
    properties: APIProperties[];
    methods: APIMethods[];
    checkboxChange: APIProperties[];
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Checkbox > API');}
    ngOnInit(){
        this.properties = [
            {
                isInput: true,
                name: "ariaLabel",
                alias: "aria-label",
                desc: "Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will take precedence so this may be omitted."
            },
            {
                isInput: true,
                name: "ariaLabelledby",
                alias: "aria-labelledby",
                isHtml: true,
                desc: "Users can specify the <code class=\"docs-code\">aria-labelledby</code> attribute which will be forwarded to the input element."
            },
            {
                isInput: true,
                name: "id",
                desc: "A unique id for the checkbox. If one is not supplied, it is auto-generated."
            },
            {
                isInput: true,
                name: "disableRipple",
                desc: "Whether the ripple effect for this checkbox is disabled."
            },
            {
                name: "inputId",
                isHtml: true,
                desc: "ID of the native input element inside <code class=\"docs-code\">&lt;md-checkbox&gt;</code>."
            },
            {
                isInput: true,
                name: "required",
                desc: "Whether the checkbox is required."
            },
            {
                isInput: true,
                isDepreceated: true,
                name: "align",
                isHtml: true,
                desc: "Whether or not the checkbox should appear before or after the label.<br>Note that this attribute is depreceated and that you should use <code class=\"docs-code\">labelPosition</code> instead."
            },
            {
                isInput: true,
                name: "labelPosition",
                desc: "Whether the label should appear after or before the checkbox. Defaults to 'after'."
            },
            {
                isInput: true,
                name: "name",
                desc: "Name value will be applied to the input element if present."
            },
            {
                isOutput: true,
                name: "change",
                isHtml: true,
                desc: "Event emitted when the checkbox's <code class=\"docs-code\">checked</code> value changes."
            },
            {
                isOutput: true,
                name: "indeterminateChange",
                isHtml: true,
                desc: "Event emitted when the checkbox's <code class=\"docs-code\">indeterminate</code> value changes."
            },
            {
                isInput: true,
                name: "value",
                desc: "The value of the native input element."
            },
            {
                isInput: true,
                name: "checked",
                desc: "Whether the checkbox is checked."
            },
            {
                isInput: true,
                name: "indeterminate",
                desc: "Whether the checkbox is indeterminate. This is also known as \"mixed\" mode and can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately set to false."
            }
        ]
        this.methods = [
            {
                name: "toggle",
                isHtml: true,
                desc: "Toggles the <code class=\"docs-code\">checked</code> state of the checkbox."
            },
            {
                name: "focus",
                desc: "Focuses the checkbox."
            }
        ]
        this.checkboxChange = [
            {
                name: "source",
                isHtml: true,
                desc: "The source <code class=\"docs-code\">MatCheckbox</code> of the event."
            },
            {
                name: "checked",
                isHtml: true,
                desc: "The new <code class=\"docs-code\">checked</code> value of the checkbox."
            }
        ]
    }
}