import { MiscOnboardingExample } from './../../../../assets/examples/misc/onboarding/onboarding-example';
import { CodeFiles } from './../../../shared/example-viewer.docs';
import { SharedComponent } from './../../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'misc-onboarding',
	templateUrl: 'onboarding.html'
})
export class DocsMiscOnboarding implements OnInit {
	onboardingExample: CodeFiles;
	constructor(private shared: SharedComponent) { shared.setTitle("Docs > Misc > Onboarding") }
	goToFrag(frag: string) {
		if (document.getElementById(frag)) {
			document.getElementById(frag).scrollIntoView();
		}
	}
	ngOnInit() {
		this.onboardingExample = {
			highlightPath: [
				'assets/highlighted/onboarding-example-html.html',
				'assets/highlighted/onboarding-example-ts.html',
				'assets/highlighted/onboarding-example-dialog-html.html',
				'assets/highlighted/onboarding-example-dialog-css.html'
			],
			filePath: [
				'assets/examples/misc/onboarding/onboarding-example.html',
				'assets/examples/misc/onboarding/onboarding-example.ts',
				'assets/examples/misc/onboarding/onboarding-example-dialog.html',
				'assets/examples/misc/onboarding/onboarding-example-dialog.css'
			],
			componentName: MiscOnboardingExample
		}
	}
}
@Component({
	selector: 'misc-svgicons',
	templateUrl: 'svgicons.html'
})
export class DocsMiscSvgicons {
	constructor(private shared: SharedComponent) { shared.setTitle("Docs > Misc > SVG Icons") }
	goToFrag(frag: string) {
		if (document.getElementById(frag)) {
			document.getElementById(frag).scrollIntoView();
		}
	}

}

@Component({
	selector: 'misc-component-customize',
	templateUrl: 'component-customize.html'
})
export class DocsMiscCustomization {
	constructor(private shared: SharedComponent) { shared.setTitle("Docs > Misc > Component Customization") }
	goToFrag(frag) {
		if (document.getElementById(frag)) {
			document.getElementById(frag).scrollIntoView();
		}
	}
}