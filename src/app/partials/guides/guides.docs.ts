import { MiscOnboardingExample } from './../../../assets/examples/misc/onboarding/onboarding-example';
import { CodeFiles } from './../../shared/example-viewer.docs';
import { SharedComponent } from '../../shared/shared.docs';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'guide-docs-gettingstarted',
    templateUrl: './gettingstarted.docs.html'
})

export class DocsGettingStartedGuide {
    constructor(private shared: SharedComponent){
        shared.setTitle('Docs > Guides > Getting Started');
    }
}

@Component({
    selector: 'guide-docs-theming',
    templateUrl: './theming.docs.html'
})

export class DocsThemingGuide {
    constructor(private shared: SharedComponent) {
        shared.setTitle('Docs > Guides > Theming');
    }
}

@Component({
	selector: 'guides-docs-themingcomponent',
	templateUrl: './themingcomponent.docs.html'
})

export class DocsThemingComponentGuide {
	constructor(private shared: SharedComponent) {
		shared.setTitle("Docs > Guides > Theming your components");
	}
}

@Component({
	selector: 'guides-docs-customizing-component-styles',
	templateUrl: './customizing-component-styles.docs.html'
})
export class DocsCustomizeComponentStyleGuide {
	constructor(private shared: SharedComponent){
		shared.setTitle("Docs > Guides > Customizing Component Styles");
	}
}

// Misc docs

@Component({
	selector: 'misc-onboarding',
	templateUrl: './onboarding.docs.html'
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
				'assets/examples/misc/onboarding/onboarding-example.css'
			],
			componentName: MiscOnboardingExample,
			url: "misc/onboarding/onboarding"
		}
	}
}
@Component({
	selector: 'misc-svgicons',
	templateUrl: './svgicons.docs.html'
})
export class DocsMiscSvgicons {
	constructor(private shared: SharedComponent) { shared.setTitle("Docs > Misc > SVG Icons") }
	goToFrag(frag: string) {
		if (document.getElementById(frag)) {
			document.getElementById(frag).scrollIntoView();
		}
	}

}
