import { Component } from "@angular/core";

@Component({
    selector: 'button-types-example',
    templateUrl: 'button-types.html',
    styleUrls: ['button-types.css']
})
export class ButtonTypesExample {
    color: string = "";
    disabled: boolean;
}