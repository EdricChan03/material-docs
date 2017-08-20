// Example module
import { ExampleModule } from './example.module';
// Docs module
import { DocsMaterialModule } from './materialdocs.module';
import { DocsModule } from './docs.module';
// App routing
import { AppRouting } from './app.routing';

// Other
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdIconRegistry, MdNativeDateModule, MaterialModule } from "@angular/material";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
		MaterialModule,
		MdNativeDateModule,

        DocsModule,
        ExampleModule,
        AppRouting,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer) {
		mdIconRegistry.addSvgIconSetInNamespace('icons', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icons.svg'));
		mdIconRegistry.addSvgIcon('angularblack', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular_solidBlack.svg'));
    }
}