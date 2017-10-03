import { DocumentationItems } from './partials/documentation-items';
import { DocsAPIBtn } from './partials/docs/button/apibutton.component';
// Doc guides
import {
	DocsThemingComponentGuide,
	DocsGettingStartedGuide,
	DocsThemingGuide,
	DocsMiscOnboarding,
	DocsMiscSvgicons,
	DocsCustomizeComponentStyleGuide
} from './partials/guides/guides.docs';
// Other modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsMaterialModule } from './materialdocs.module';

// Docs misc
import { DocsHeader } from './shared/header.docs';
import { DocsTOC } from './shared/table-of-contents.docs';
import { APIPropertyViewerComponent, APIMethodViewerComponent } from './shared/api-viewer.docs';
import { SharedComponent } from './shared/shared.docs';
import { CodeDirective } from './shared/code.docsdirective';
import { PreferencesDialog } from './partials/preferences.docs';
import { DocViewerComponent } from './shared/doc-viewer.docs';
import { ExampleViewerComponent } from './shared/example-viewer.docs';
import { CodeViewerComponent } from './shared/code-viewer.docs';
import { DocsShowcase } from './partials/showcase/showcase.docs';
import { DocsSearch } from './partials/search.docs';
import { DocsHomePage } from './partials/homepages/docshome.docs';
import { DocsGuideNav, DocsMiscMoreDialog } from './partials/guides/guidenav.docs';
import { AboutDialog, LicenseDialog } from './app.component';
// Docs
// Datepicker
import { DocsAPIDatepicker } from './partials/docs/datepicker/apidatepicker.component';
import { DocsOverviewDatepicker } from './partials/docs/datepicker/overviewdatepicker.component';
// Expansion
import { DocsOverviewExpansion } from './partials/docs/expansion/overviewexpansionpanel.component';
// Dialog
import { DocsExampleDialog } from './partials/docs/dialog/exampledialog.component';
import { DocsOverviewDialog } from './partials/docs/dialog/overviewdialog.component';
// Slide toggle
import { DocsAPISlideToggle } from './partials/docs/slide-toggle/apislidetoggle.component';
import { DocsExampleSlideToggle } from './partials/docs/slide-toggle/exampleslidetoggle.component';
import { DocsOverviewSlideToggle } from './partials/docs/slide-toggle/overviewslidetoggle.component';
// List
import { DocsAPIList } from './partials/docs/list/apilist.component';
import { DocsExampleList } from './partials/docs/list/examplelist.component';
import { DocsOverviewList } from './partials/docs/list/overviewlist.component';
// Button toggle
import { DocsExampleButtonToggle } from './partials/docs/button-toggle/examplebuttontoggle.component';
import { DocsOverviewButtonToggle } from './partials/docs/button-toggle/overviewbuttontoggle.component';
// Menu
import { DocsExampleMenu } from './partials/docs/menu/examplemenu.component';
import { DocsOverviewMenu } from './partials/docs/menu/overviewmenu.component';
// Icons
import { DocsOverviewIcon } from './partials/docs/icon/overviewicon.component';
// Checkbox
import { DocsExampleCheckbox } from './partials/docs/checkbox/examplecheckbox.component';
import { DocsOverviewCheckbox } from './partials/docs/checkbox/overviewcheckbox.component';
import { DocsAPICheckbox } from './partials/docs/checkbox/apicheckbox.component';
// Tooltip
import { DocsExampleTooltip } from './partials/docs/tooltip/exampletooltip.component';
import { DocsOverviewTooltip } from './partials/docs/tooltip/overviewtooltip.component';
// Button
import { DocsExampleBtn } from './partials/docs/button/examplebutton.component';
import { DocsOverviewBtn } from './partials/docs/button/overviewbutton.component';

// NgModule import
import { NgModule } from '@angular/core';

export const DOC_BUTTON_COMPONENTS = [
	DocsOverviewBtn,
	DocsExampleBtn,
	DocsAPIBtn
];
export const DOC_BUTTON_TOGGLE_COMPONENTS = [
	DocsOverviewButtonToggle,
	DocsExampleButtonToggle
];
export const DOC_CHECKBOX_COMPONENTS = [
	DocsOverviewCheckbox,
	DocsExampleCheckbox,
	DocsAPICheckbox
];
export const DOC_DATEPICKER_COMPONENTS = [
	DocsOverviewDatepicker,
	DocsAPIDatepicker
];
export const DOC_DIALOG_COMPONENTS = [
	DocsOverviewDialog,
	DocsExampleDialog
];
export const DOC_EXPANSION_COMPONENTS = [
	DocsOverviewExpansion
];
export const DOC_ICON_COMPONENTS = [
	DocsOverviewIcon
];
export const DOC_LIST_COMPONENTS = [
	DocsOverviewList,
	DocsExampleList,
	DocsAPIList
];
export const DOC_MENU_COMPONENTS = [
	DocsOverviewMenu,
	DocsExampleMenu
];
export const DOC_SLIDE_TOGGLE_COMPONENTS = [
	DocsOverviewSlideToggle,
	DocsExampleSlideToggle,
	DocsAPISlideToggle
];
export const DOC_TOOLTIP_COMPONENTS = [
	DocsOverviewTooltip,
	DocsExampleTooltip,
];
// Others
export const DOC_GUIDES = [
	DocsGettingStartedGuide,
	DocsThemingGuide,
	DocsThemingComponentGuide,
	DocsCustomizeComponentStyleGuide,
	DocsGuideNav
];
export const DOC_MISC = [
	DocsHomePage,
	DocsSearch,
	DocsShowcase,
	CodeViewerComponent,
	ExampleViewerComponent,
	DocViewerComponent,
	CodeDirective,
	APIPropertyViewerComponent,
	APIMethodViewerComponent,
	DocsTOC,
	DocsHeader
];
export const DOC_MISC_DOCS = [
	DocsMiscOnboarding,
	DocsMiscSvgicons
];
export const DOC_COMPONENTS = [
	DOC_BUTTON_COMPONENTS,
	DOC_BUTTON_TOGGLE_COMPONENTS,
	DOC_CHECKBOX_COMPONENTS,
	DOC_DATEPICKER_COMPONENTS,
	DOC_DIALOG_COMPONENTS,
	DOC_EXPANSION_COMPONENTS,
	DOC_ICON_COMPONENTS,
	DOC_LIST_COMPONENTS,
	DOC_MENU_COMPONENTS,
	DOC_SLIDE_TOGGLE_COMPONENTS,
	DOC_TOOLTIP_COMPONENTS,
	DOC_GUIDES,
	DOC_MISC,
	DOC_MISC_DOCS
];
export const DOC_DIALOGS = [
	PreferencesDialog,
	AboutDialog,
	DocsMiscMoreDialog,
	LicenseDialog
];

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule,
		FormsModule,
		FlexLayoutModule,
		DocsMaterialModule
	],
	exports: [
		DOC_COMPONENTS,
		DOC_DIALOGS
	],
	declarations: [
		DOC_COMPONENTS,
		DOC_DIALOGS
	],
	providers: [
		SharedComponent,
		DocumentationItems
	],
	entryComponents: [
		DOC_DIALOGS
	]
})
export class DocsModule { }