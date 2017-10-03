import { SelectionListExample } from './../assets/examples/list/selection-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsMaterialModule } from './materialdocs.module';

import { MiscOnboardingExample, MiscOnboardingExampleDialog } from './../assets/examples/misc/onboarding/onboarding-example';
import { SimpleExpansionExample } from './../assets/examples/expansion/simple-expansion';
import { TouchDatepickerExample } from './../assets/examples/datepicker/touch-ui-datepicker';
import { StartViewDatepickerExample } from './../assets/examples/datepicker/startat-datepicker';
import { MinMaxDatepickerExample } from './../assets/examples/datepicker/min-max-validation-datepicker';
import { FilterDatepickerExample } from './../assets/examples/datepicker/filter-validation-datepicker';
import { ApiDatepickerExample } from './../assets/examples/datepicker/api-datepicker';
import { SimpleDatepickerExample } from './../assets/examples/datepicker/simple-datepicker';
import { ExclusiveButtonToggleExample } from './../assets/examples/button-toggle/exclusive-button-toggle';
import { IconMenuExample, IconMenuDialog } from './../assets/examples/menu/icon-menu';
import { NestedMenuExample } from './../assets/examples/menu/nested-menu';
import { SimpleMenuExample } from './../assets/examples/menu/simple-menu';
import { AdvancedListExample, AdvancedListDialog } from './../assets/examples/list/advanced-list';
import { SimpleButtonToggleExample } from './../assets/examples/button-toggle/simple-button-toggle';
import { ConfigurableSlideToggleExample } from './../assets/examples/slide-toggle/configurable-slide-toggle';
import { NavListExample } from './../assets/examples/list/nav-list';
import { SimpleListExample } from './../assets/examples/list/simple-list';
import { SimpleSlideToggleExample } from './../assets/examples/slide-toggle/simple-slide-toggle';
import { ConfigurableDialogExample, ConfigurableDialog } from './../assets/examples/dialog/configurable-dialog';
import { DialogResultExample, DialogResult } from './../assets/examples/dialog/dialog-result';
import { CheckboxConfigurableExample } from './../assets/examples/checkbox/configurable-checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { SimpleTooltipExample } from './../assets/examples/tooltip/simple-tooltip';
import { ConfigurableTooltipExample } from './../assets/examples/tooltip/configurable-tooltip';
import { SimpleCheckboxExample } from './../assets/examples/checkbox/simple-checkbox';
import { ButtonOverviewExample } from './../assets/examples/button/button-overview';
import { ButtonTypesExample } from './../assets/examples/button/button-types';
import { ButtonNoRippleExample } from './../assets/examples/button/button-noripple';
export const BUTTON_COMPONENTS = [
    ButtonNoRippleExample,
    ButtonTypesExample,
    ButtonOverviewExample
]
export const BUTTON_TOGGLE_COMPONENTS = [
	SimpleButtonToggleExample,
	ExclusiveButtonToggleExample
]
export const CHECKBOX_COMPONENTS = [
    SimpleCheckboxExample,
    CheckboxConfigurableExample
]
export const DATEPICKER_COMPONENTS = [
	ApiDatepickerExample,
	FilterDatepickerExample,
	MinMaxDatepickerExample,
	SimpleDatepickerExample,
	StartViewDatepickerExample,
	TouchDatepickerExample
]
export const DIALOG_COMPONENTS = [
    DialogResultExample,
    DialogResult,
    ConfigurableDialogExample,
    ConfigurableDialog
]
export const EXPANSION_COMPONENTS = [
	SimpleExpansionExample
]
export const LIST_COMPONENTS = [
    SimpleListExample,
    NavListExample,
    AdvancedListExample,
	AdvancedListDialog,
	SelectionListExample
]
export const MENU_COMPONENTS = [
    SimpleMenuExample,
	NestedMenuExample,
	IconMenuExample,
	IconMenuDialog
]
export const SLIDE_TOGGLE_COMPONENTS = [
    SimpleSlideToggleExample,
    ConfigurableSlideToggleExample
]
export const TOOLTIP_COMPONENTS = [
    ConfigurableTooltipExample,
    SimpleTooltipExample
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