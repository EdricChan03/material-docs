import { Component } from '@angular/core';
@Component({
    selector: 'configurable-checkbox-example',
    templateUrl: 'configurable-checkbox.html',
    styleUrls: ['configurable-checkbox.css']
})
export class CheckboxConfigurableComponent {
    checked: boolean = false;
    indeterminate: boolean = false;
    disabled: boolean = false;
    color: string = "";
    disableRipple: boolean = false;
    labelPos: string = "after";
}