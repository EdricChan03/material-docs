import { DocsSearch } from './partials/search.component';
import { DocsHomePage } from './partials/homepages/docshome.component';
import { DocsGuideNav } from './partials/guides/guidenav.component';
import { DocsGettingStartedGuide } from './partials/guides/gettingstarted.component';
import { CodeDirective } from './shared/code.directive';
import { DocsOverviewCheckbox } from './partials/overviewcheckbox.component';
import { ButtonNoRippleComponent } from './../assets/examples/button/button-noripple';
import { SharedComponent } from './shared/shared';
import { TooltipPositionComponent } from './../assets/examples/tooltip/tooltip-position';
import { DocsOverviewIcon } from './partials/overviewicon.component';
import { DocsOverviewTooltip } from './partials/overviewtooltip.component';
import { DocsExampleTooltip } from './partials/exampletooltip.component';
import { ButtonTooltipComponent } from './../assets/examples/tooltip/button-tooltip';
import { DocsExampleBtn } from './partials/examplebutton.component';
import { ButtonOverviewComponent } from './../assets/examples/button/button-overview';
import { DocViewerComponent } from './shared/doc-viewer.component';
import { ButtonTypesComponent } from './../assets/examples/button/button-types';
import { ExampleViewerComponent } from './shared/example-viewer.component';
import { DocsOverviewBtn } from './partials/overviewbutton.component';
import { AppRouting } from './app.routing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconRegistry } from "@angular/material";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
const EXAMPLE_COMPONENTS = [
    ButtonTypesComponent,
    ButtonOverviewComponent,
    ButtonTooltipComponent,
    ButtonNoRippleComponent,
    TooltipPositionComponent
]
const DOC_COMPONENTS = [
    DocsOverviewBtn,
    DocsExampleBtn,
    DocsOverviewTooltip,
    DocsExampleTooltip,
    DocsOverviewIcon,
    DocsOverviewCheckbox,
    DocsGettingStartedGuide,
    DocsGuideNav,
    DocsHomePage,
    DocsSearch
]
@NgModule({
    declarations: [
        AppComponent,
        ExampleViewerComponent,
        DocViewerComponent,
        EXAMPLE_COMPONENTS,
        DOC_COMPONENTS,
        CodeDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MaterialModule,
        AppRouting
    ],
    providers: [
        SharedComponent,
    ],
    entryComponents: [
        EXAMPLE_COMPONENTS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer) {
        mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/mdi.svg'));
        mdIconRegistry.addSvgIcon('angular-colour', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular-coloured.svg'));
    }
}
