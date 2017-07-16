import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'configurable-tooltip-example',
    templateUrl: 'configurable-tooltip.html',
    styleUrls: ['configurable-tooltip.css'],
    encapsulation: ViewEncapsulation.None
})
export class ConfigurableTooltipComponent {
    positions = [
        { val: 'above', displayVal: 'Above' },
        { val: 'below', displayVal: 'Below' },
        { val: 'left', displayVal: 'Left' },
        { val: 'right', displayVal: 'Right' },
        { val: 'before', displayVal: 'Before' },
        { val: 'after', displayVal: 'After' }
    ]
    tooltipPosition: string = "above";
    tooltipContent: string = "tooltip";
    tooltipDisabled: boolean = false;
    tooltipCustomClass: boolean = false;
}