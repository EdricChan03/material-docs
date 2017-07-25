import { AboutDialog } from './app.component';
import { DocsExamples } from './partials/docs/example.component';
import { DocsExampleMenu } from './partials/docs/menu/examplemenu.component';
import { DocsOverviewMenu } from './partials/docs/menu/overviewmenu.component';
import { DocsOverviewDatepicker } from './partials/docs/datepicker/overviewdatepicker.component';
import { DocsAPIList } from './partials/docs/list/apilist.component';
import { DocsExampleList } from './partials/docs/list/examplelist.component';
import { DocsOverviewList } from './partials/docs/list/overviewlist.component';
import { DocsAPICheckbox } from './partials/docs/checkbox/apicheckbox.component';
import { APIPropertyViewerComponent, APIMethodViewerComponent } from './shared/api-viewer.component';
import { DocsAPISlideToggle } from './partials/docs/slide-toggle/apislidetoggle.component';
import { DocsOverviewButtonToggle } from './partials/docs/button-toggle/overviewbuttontoggle.component';
import { DocsExampleSlideToggle } from './partials/docs/slide-toggle/exampleslidetoggle.component';
import { DocsOverviewSlideToggle } from './partials/docs/slide-toggle/overviewslidetoggle.component';
import { DocsExampleDialog } from './partials/docs/dialog/exampledialog.component';
import { DocsOverviewDialog } from './partials/docs/dialog/overviewdialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponent } from './shared/shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CodeDirective } from './shared/code.directive';
import { PreferencesDialog } from './partials/preferences.component';
import { DocViewerComponent } from './shared/doc-viewer.component';
import { ExampleViewerComponent } from './shared/example-viewer.component';
import { CodeViewerComponent } from './shared/code-viewer.component';
import { DocsShowcase } from './partials/showcase/showcase.component';
import { DocsSearch } from './partials/search.component';
import { DocsHomePage } from './partials/homepages/docshome.component';
import { DocsGuideNav } from './partials/guides/guidenav.component';
import { DocsThemingGuide } from './partials/guides/theming.component';
import { DocsGettingStartedGuide } from './partials/guides/gettingstarted.component';
import { DocsExampleCheckbox } from './partials/docs/checkbox/examplecheckbox.component';
import { DocsOverviewCheckbox } from './partials/docs/checkbox/overviewcheckbox.component';
import { DocsOverviewIcon } from './partials/docs/icon/overviewicon.component';
// Docs
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
    DocsExampleBtn
]
export const DOC_BUTTON_TOGGLE_COMPONENTS = [
    DocsOverviewButtonToggle,
]
export const DOC_CHECKBOX_COMPONENTS = [
    DocsOverviewCheckbox,
    DocsExampleCheckbox,
    DocsAPICheckbox
]
export const DOC_DATEPICKER_COMPONENTS = [
    DocsOverviewDatepicker
]
export const DOC_DIALOG_COMPONENTS = [
    DocsOverviewDialog,
    DocsExampleDialog,
]
export const DOC_ICON_COMPONENTS = [
    DocsOverviewIcon,
]
export const DOC_LIST_COMPONENTS = [
    DocsOverviewList,
    DocsExampleList,
    DocsAPIList
]
export const DOC_MENU_COMPONENTS = [
    DocsOverviewMenu,
    DocsExampleMenu
]
export const DOC_SLIDE_TOGGLE_COMPONENTS = [
    DocsOverviewSlideToggle,
    DocsExampleSlideToggle,
    DocsAPISlideToggle
]
export const DOC_TOOLTIP_COMPONENTS = [
    DocsOverviewTooltip,
    DocsExampleTooltip,
]
// Others
export const DOC_GUIDES = [
    DocsGettingStartedGuide,
    DocsThemingGuide,
    DocsGuideNav
]
export const DOC_MISC = [
    DocsHomePage,
    DocsSearch,
    DocsShowcase,
	DocsExamples,
    CodeViewerComponent,
    ExampleViewerComponent,
    DocViewerComponent,
    CodeDirective,
    APIPropertyViewerComponent,
	APIMethodViewerComponent
]
export const DOC_COMPONENTS = [
    DOC_BUTTON_COMPONENTS,
    DOC_BUTTON_TOGGLE_COMPONENTS,
    DOC_CHECKBOX_COMPONENTS,
    DOC_DATEPICKER_COMPONENTS,
    DOC_DIALOG_COMPONENTS,
    DOC_ICON_COMPONENTS,
    DOC_LIST_COMPONENTS,
    DOC_MENU_COMPONENTS,
    DOC_SLIDE_TOGGLE_COMPONENTS,
    DOC_TOOLTIP_COMPONENTS,
    DOC_GUIDES,
    DOC_MISC
]
export const DOC_DIALOGS = [
	PreferencesDialog,
	AboutDialog
]
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        FormsModule,
        FlexLayoutModule
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
        SharedComponent
    ],
    entryComponents: [
        DOC_DIALOGS
    ]
})
export class DocsModule { }
