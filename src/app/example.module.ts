import { SimpleButtonToggleComponent } from './../assets/examples/button-toggle/simple-button-toggle';
import { ConfigurableSlideToggleComponent } from './../assets/examples/slide-toggle/configurable-slide-toggle';
import { NavListComponent } from './../assets/examples/list/nav-list';
import { SimpleListComponent } from './../assets/examples/list/simple-list';
import { SimpleSlideToggleComponent } from './../assets/examples/slide-toggle/simple-slide-toggle';
import { ConfigurableDialogComponent, ConfigurableDialog } from './../assets/examples/dialog/configurable-dialog';
import { DialogResultComponent, DialogResult } from './../assets/examples/dialog/dialog-result';
import { CheckboxConfigurableComponent } from './../assets/examples/checkbox/configurable-checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { SimpleTooltipComponent } from './../assets/examples/tooltip/simple-tooltip';
import { ConfigurableTooltipComponent } from './../assets/examples/tooltip/configurable-tooltip';
import { SimpleCheckboxComponent } from './../assets/examples/checkbox/simple-checkbox';
import { ButtonOverviewComponent } from './../assets/examples/button/button-overview';
import { ButtonTypesComponent } from './../assets/examples/button/button-types';
import { ButtonNoRippleComponent } from './../assets/examples/button/button-noripple';
export const BUTTON_COMPONENTS = [
    ButtonNoRippleComponent,
    ButtonTypesComponent,
    ButtonOverviewComponent
]
export const BUTTON_TOGGLE_COMPONENTS = [
    SimpleButtonToggleComponent
]
export const CHECKBOX_COMPONENTS = [
    SimpleCheckboxComponent,
    CheckboxConfigurableComponent
]
export const DIALOG_COMPONENTS = [
    DialogResultComponent,
    DialogResult,
    ConfigurableDialogComponent,
    ConfigurableDialog
]
export const ICON_COMPONENTS = [

]
export const LIST_COMPONENTS = [
    SimpleListComponent,
    NavListComponent
]
export const SLIDE_TOGGLE_COMPONENTS = [
    SimpleSlideToggleComponent,
    ConfigurableSlideToggleComponent
]
export const TOOLTIP_COMPONENTS = [
    ConfigurableTooltipComponent,
    SimpleTooltipComponent
]
export const EXAMPLE_COMPONENTS = [
    BUTTON_COMPONENTS,
    BUTTON_TOGGLE_COMPONENTS,
    CHECKBOX_COMPONENTS,
    DIALOG_COMPONENTS,
    LIST_COMPONENTS,
    SLIDE_TOGGLE_COMPONENTS,
    TOOLTIP_COMPONENTS
]
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        EXAMPLE_COMPONENTS
    ],
    exports: [
        EXAMPLE_COMPONENTS
    ],
    entryComponents: [
        EXAMPLE_COMPONENTS
    ]
})
export class ExampleModule { }