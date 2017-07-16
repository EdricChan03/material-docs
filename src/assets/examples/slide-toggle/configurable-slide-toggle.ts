import { Component } from '@angular/core';
@Component({
    selector: 'configurable-slide-toggle',
    templateUrl: 'configurable-slide-toggle.html',
    styleUrls: ['configurable-slide-toggle.css']
})
export class ConfigurableSlideToggleComponent {
    checked: boolean = false;
    disabled: boolean = false;
    color: string = "";
    disableRipple: boolean = false;
    labelPos: string = "after";
}