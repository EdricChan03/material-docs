import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsMaterialModule } from './materialdocs.module';

import { MiscOnboardingExample, MiscOnboardingExampleDialog } from './../assets/examples/misc/onboarding/onboarding-example';
import { SimpleExpansionComponent } from './../assets/examples/expansion/simple-expansion';
import { TouchDatepickerComponent } from './../assets/examples/datepicker/touch-ui-datepicker';
import { StartViewDatepickerComponent } from './../assets/examples/datepicker/startat-datepicker';
import { MinMaxDatepickerComponent } from './../assets/examples/datepicker/min-max-validation-datepicker';
import { FilterDatepickerComponent } from './../assets/examples/datepicker/filter-validation-datepicker';
import { ApiDatepickerComponent } from './../assets/examples/datepicker/api-datepicker';
import { SimpleDatepickerComponent } from './../assets/examples/datepicker/simple-datepicker';
import { MultipleButtonToggleComponent } from './../assets/examples/button-toggle/multiple-button-toggle';
import { IconMenuComponent, IconMenuDialog } from './../assets/examples/menu/icon-menu';
import { NestedMenuComponent } from './../assets/examples/menu/nested-menu';
import { SimpleMenuComponent } from './../assets/examples/menu/simple-menu';
import { AdvancedListComponent, AdvancedListDialog } from './../assets/examples/list/advanced-list';
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
	SimpleButtonToggleComponent,
	MultipleButtonToggleComponent
]
export const CHECKBOX_COMPONENTS = [
    SimpleCheckboxComponent,
    CheckboxConfigurableComponent
]
export const DATEPICKER_COMPONENTS = [
	ApiDatepickerComponent,
	FilterDatepickerComponent,
	MinMaxDatepickerComponent,
	SimpleDatepickerComponent,
	StartViewDatepickerComponent,
	TouchDatepickerComponent
]
export const DIALOG_COMPONENTS = [
    DialogResultComponent,
    DialogResult,
    ConfigurableDialogComponent,
    ConfigurableDialog
]
export const EXPANSION_COMPONENTS = [
	SimpleExpansionComponent
]
export const LIST_COMPONENTS = [
    SimpleListComponent,
    NavListComponent,
    AdvancedListComponent,
    AdvancedListDialog
]
export const MENU_COMPONENTS = [
    SimpleMenuComponent,
	NestedMenuComponent,
	IconMenuComponent,
	IconMenuDialog
]
export const SLIDE_TOGGLE_COMPONENTS = [
    SimpleSlideToggleComponent,
    ConfigurableSlideToggleComponent
]
export const TOOLTIP_COMPONENTS = [
    ConfigurableTooltipComponent,
    SimpleTooltipComponent
]
export const MISC_COMPONENTS = [
	MiscOnboardingExample,
	MiscOnboardingExampleDialog
]
export const EXAMPLE_COMPONENTS = [
    BUTTON_COMPONENTS,
    BUTTON_TOGGLE_COMPONENTS,
	CHECKBOX_COMPONENTS,
	DATEPICKER_COMPONENTS,
	DIALOG_COMPONENTS,
	EXPANSION_COMPONENTS,
    LIST_COMPONENTS,
    MENU_COMPONENTS,
    SLIDE_TOGGLE_COMPONENTS,
	TOOLTIP_COMPONENTS,
	MISC_COMPONENTS
]
@NgModule({
    imports: [
		BrowserModule,
		BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        DocsMaterialModule
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