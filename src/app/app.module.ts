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
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		FlexLayoutModule,
		DocsMaterialModule,
		DocsModule,
		ExampleModule,
		AppRouting
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private mdIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
		mdIconRegistry.addSvgIconSetInNamespace('icons', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icons.svg'));
	}
}