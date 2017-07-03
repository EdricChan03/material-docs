import { DocsExampleBtn } from './partials/examplebutton.component';
import { ButtonOverviewComponent } from './../assets/examples/button/button-overview';
import { DocViewerComponent } from './shared/doc-viewer.component';
import { CodeViewerComponent } from './shared/code-viewer.component';
import { ButtonTypesComponent } from './../assets/examples/button/button-types';
import { ExampleViewerComponent } from './shared/example-viewer.component';
import { DocsOverviewBtn } from './partials/overviewbutton.component';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
const EXAMPLE_COMPONENTS = [
    ButtonTypesComponent,
    ButtonOverviewComponent
]
const DOC_COMPONENTS = [
    DocsOverviewBtn,
    DocsExampleBtn
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
export class AppModule { }
