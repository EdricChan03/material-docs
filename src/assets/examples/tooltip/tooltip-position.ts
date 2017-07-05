import { Component } from '@angular/core';

@Component({
    selector: 'tooltip-position-example',
    templateUrl: 'tooltip-position.html',
    styleUrls: ['tooltip-position.css']
})
export class TooltipPositionComponent {
    positions = [
        { val: 'above', displayVal: 'Above'},
        { val: 'below', displayVal: 'Below'},
        { val: 'left', displayVal: 'Left'},
        { val: 'right', displayVal: 'Right'},
        { val: 'before', displayVal: 'Before'},
        { val: 'after', displayVal: 'After'}
    ]
    tooltipPosition: string = "above";
}