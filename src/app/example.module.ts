import { CheckboxConfigurableComponent } from './../assets/examples/checkbox/checkbox-configuration';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { SimpleTooltipComponent } from './../assets/examples/tooltip/simple-tooltip';
import { TooltipPositionComponent } from './../assets/examples/tooltip/tooltip-position';
import { ButtonTooltipComponent } from './../assets/examples/tooltip/button-tooltip';
import { SimpleCheckboxComponent } from './../assets/examples/checkbox/simple-checkbox';
import { ButtonOverviewComponent } from './../assets/examples/button/button-overview';
import { ButtonTypesComponent } from './../assets/examples/button/button-types';
import { ButtonNoRippleComponent } from './../assets/examples/button/button-noripple';
// export const BUTTON_COMPONENTS = [
//     ButtonNoRippleComponent,
//     ButtonTypesComponent,
//     ButtonOverviewComponent
// ]
// export const CHECKBOX_COMPONENTS = [
//     SimpleCheckboxComponent
// ]
// export const TOOLTIP_COMPONENTS = [
//     ButtonTooltipComponent,
//     TooltipPositionComponent,
//     SimpleTooltipComponent
// ]
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        ButtonTooltipComponent,
        TooltipPositionComponent,
        SimpleTooltipComponent,
        SimpleCheckboxComponent,
        CheckboxConfigurableComponent,
        ButtonNoRippleComponent,
        ButtonTypesComponent,
        ButtonOverviewComponent
    ],
    exports: [
        ButtonTooltipComponent,
        TooltipPositionComponent,
        SimpleTooltipComponent,
        SimpleCheckboxComponent,
        CheckboxConfigurableComponent,
        ButtonNoRippleComponent,
        ButtonTypesComponent,
        ButtonOverviewComponent
    ],
    entryComponents: [
        ButtonTooltipComponent,
        TooltipPositionComponent,
        SimpleTooltipComponent,
        SimpleCheckboxComponent,
        CheckboxConfigurableComponent,
        ButtonNoRippleComponent,
        ButtonTypesComponent,
        ButtonOverviewComponent
    ]
})
export class ExampleModule { }