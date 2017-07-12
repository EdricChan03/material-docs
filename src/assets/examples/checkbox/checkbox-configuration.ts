import { Component } from '@angular/core';
@Component({
    selector: 'checkbox-configurable-example',
    templateUrl: 'checkbox-configuration.html',
    styleUrls: ['checkbox-configuration.css']
})
export class CheckboxConfigurableComponent {
    checked: boolean = false;
    indeterminate: boolean = false;
    align: string = 'start';
    disabled: boolean = false;
    color: string = "";
}