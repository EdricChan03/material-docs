import { DocsStylesBtn } from './partials/docs/button/stylesbutton.component';
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
import { DocsMaterialModule } from './materialdocs.module';
import { DocumentationItems } from './partials/documentation-items';
import { CommonModule } from '@angular/common';

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
import { DocsAPIBtn } from './partials/docs/button/apibutton.component';
// Icon
import { DocsOverviewIcon } from './partials/docs/icon/overviewicon.component';
import { DocsExampleIcon } from './partials/docs/icon/exampleicon.component';
// NgModule import
import { NgModule } from '@angular/core';

const DOC_BUTTON_COMPONENTS = [
	DocsOverviewBtn,
	DocsExampleBtn,
	DocsAPIBtn,
	DocsStylesBtn
];
const DOC_BUTTON_TOGGLE_COMPONENTS = [
	DocsOverviewButtonToggle,
	DocsExampleButtonToggle
];
export const DOC_CHECKBOX_COMPONENTS = [
	DocsOverviewCheckbox,
	DocsExampleCheckbox,
	DocsAPICheckbox
];
const DOC_DATEPICKER_COMPONENTS = [
	DocsOverviewDatepicker,
	DocsAPIDatepicker
];
const DOC_DIALOG_COMPONENTS = [
	DocsOverviewDialog,
	DocsExampleDialog
];
const DOC_EXPANSION_COMPONENTS = [
	DocsOverviewExpansion
];
const DOC_ICON_COMPONENTS = [
	DocsOverviewIcon,
	DocsExampleIcon
];
const DOC_LIST_COMPONENTS = [
	DocsOverviewList,
	DocsExampleList,
	DocsAPIList
];
const DOC_MENU_COMPONENTS = [
	DocsOverviewMenu,
	DocsExampleMenu
];
const DOC_SLIDE_TOGGLE_COMPONENTS = [
	DocsOverviewSlideToggle,
	DocsExampleSlideToggle,
	DocsAPISlideToggle
];
const DOC_TOOLTIP_COMPONENTS = [
	DocsOverviewTooltip,
	DocsExampleTooltip,
];
// Others
const DOC_GUIDES = [
	DocsGettingStartedGuide,
	DocsThemingGuide,
	DocsThemingComponentGuide,
	DocsCustomizeComponentStyleGuide,
	DocsGuideNav
];
const DOC_MISC = [
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
const DOC_MISC_DOCS = [
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
		CommonModule,
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