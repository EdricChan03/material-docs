import { DocsOverviewTooltip } from './partials/overviewtooltip.component';
import { DocsExampleTooltip } from './partials/exampletooltip.component';
import { ButtonTooltipComponent } from './../assets/examples/button/button-tooltip';
import { DocsExampleBtn } from './partials/examplebutton.component';
import { ButtonOverviewComponent } from './../assets/examples/button/button-overview';
import { DocViewerComponent } from './shared/doc-viewer.component';
import { CodeViewerComponent } from './shared/code-viewer.component';
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
    ButtonTooltipComponent
]
const DOC_COMPONENTS = [
    DocsOverviewBtn,
    DocsExampleBtn,
    DocsOverviewTooltip,
    DocsExampleTooltip
]
@NgModule({
    declarations: [
        AppComponent,
        ExampleViewerComponent,
        DocViewerComponent,
        CodeViewerComponent,
        EXAMPLE_COMPONENTS,
        DOC_COMPONENTS
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
    entryComponents: [
        EXAMPLE_COMPONENTS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer){
        mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/mdi.svg'));
    }
}
