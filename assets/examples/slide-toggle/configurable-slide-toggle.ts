import { Component } from '@angular/core';
@Component({
    selector: 'configurable-slide-toggle-example',
    templateUrl: 'configurable-slide-toggle.html',
    styleUrls: ['configurable-slide-toggle.css']
})
export class ConfigurableSlideToggleExample {
    checked: boolean = false;
    disabled: boolean = false;
    color: string = "";
    disableRipple: boolean = false;
    labelPos: string = "after";
}