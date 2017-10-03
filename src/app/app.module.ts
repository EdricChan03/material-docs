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
import { MatIconRegistry } from '@angular/material/icon';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
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
		DocsMaterialModule,
		DocsModule,
		ExampleModule,
		AppRouting
	],
	bootstrap: [AppComponent],
	providers: [
		{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
	]
})
export class AppModule {
	constructor(private mdIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
		mdIconRegistry.addSvgIconSetInNamespace('icons', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icons.svg'));
	}
}