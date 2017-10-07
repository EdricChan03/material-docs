import { DocsExampleIcon } from './partials/docs/icon/exampleicon.component';
import { DocsAPIBtn } from './partials/docs/button/apibutton.component';
import { DocsOverviewExpansion } from './partials/docs/expansion/overviewexpansionpanel.component';
import { DocsAPIDatepicker } from './partials/docs/datepicker/apidatepicker.component';
import { DocsExampleButtonToggle } from './partials/docs/button-toggle/examplebuttontoggle.component';
import { DocsExampleMenu } from './partials/docs/menu/examplemenu.component';
import { DocsOverviewMenu } from './partials/docs/menu/overviewmenu.component';
import { DocsOverviewDatepicker } from './partials/docs/datepicker/overviewdatepicker.component';
import { DocsAPIList } from './partials/docs/list/apilist.component';
import { DocsExampleList } from './partials/docs/list/examplelist.component';
import { DocsOverviewList } from './partials/docs/list/overviewlist.component';
import { DocsAPICheckbox } from './partials/docs/checkbox/apicheckbox.component';
import { DocsAPISlideToggle } from './partials/docs/slide-toggle/apislidetoggle.component';
import { DocsOverviewButtonToggle } from './partials/docs/button-toggle/overviewbuttontoggle.component';
import { DocsExampleSlideToggle } from './partials/docs/slide-toggle/exampleslidetoggle.component';
import { DocsOverviewSlideToggle } from './partials/docs/slide-toggle/overviewslidetoggle.component';
import { DocsExampleDialog } from './partials/docs/dialog/exampledialog.component';
import { DocsOverviewDialog } from './partials/docs/dialog/overviewdialog.component';
// Guides
import { DocsGuideNav } from './partials/guides/guidenav.docs';
import {
	DocsThemingComponentGuide,
	DocsThemingGuide,
	DocsGettingStartedGuide,
	DocsCustomizeComponentStyleGuide,
	DocsMiscOnboarding,
	DocsMiscSvgicons
} from './partials/guides/guides.docs';
// Examples
// Autocomplete

// Button
import { DocsOverviewBtn } from './partials/docs/button/overviewbutton.component';
import { DocsExampleBtn } from './partials/docs/button/examplebutton.component';
// Card

// Checkbox
import { DocsOverviewCheckbox } from './partials/docs/checkbox/overviewcheckbox.component';
import { DocsExampleCheckbox } from './partials/docs/checkbox/examplecheckbox.component';
// Icon
import { DocsOverviewIcon } from './partials/docs/icon/overviewicon.component';
// Tooltip
import { DocsOverviewTooltip } from './partials/docs/tooltip/overviewtooltip.component';
import { DocsExampleTooltip } from './partials/docs/tooltip/exampletooltip.component';

// Docs components
import { DocsShowcase } from './partials/showcase/showcase.docs';
import { DocsSearch } from './partials/search.docs';
import { DocsHomePage } from './partials/homepages/docshome.docs';
import { DocViewerComponent } from './shared/doc-viewer.docs';
import { AppComponent } from './app.component';

// Modules
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, Route } from '@angular/router';
const DocsGuideRoutes: Route[] = [
	{ path: 'getting-started', component: DocsGettingStartedGuide },
	{ path: 'theming', component: DocsThemingGuide },
	{ path: 'theming-your-components', component: DocsThemingComponentGuide },
	{ path: 'customizing-component-styles', component: DocsCustomizeComponentStyleGuide },
	{ path: 'onboarding', component: DocsMiscOnboarding },
	{ path: 'svg-icons', component: DocsMiscSvgicons }
];
/**
 * The routes for the application
 * @type {Routes}
 */
export const AppRoutes: Routes = [
	{ path: 'home', component: AppComponent, pathMatch: 'full' },
	{
		path: 'components', component: DocsHomePage, children: [
			{
				path: 'button', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewBtn },
					{ path: 'examples', component: DocsExampleBtn },
					{ path: 'api', component: DocsAPIBtn },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'tooltip', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewTooltip },
					{ path: 'examples', component: DocsExampleTooltip },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'icon', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewIcon },
					{ path: '**', redirectTo: 'overview' }

				]
			},
			{
				path: 'checkbox', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewCheckbox },
					{ path: 'examples', component: DocsExampleCheckbox },
					{ path: 'api', component: DocsAPICheckbox },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'dialog', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewDialog },
					{ path: 'examples', component: DocsExampleDialog },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'slide-toggle', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewSlideToggle },
					{ path: 'examples', component: DocsExampleSlideToggle },
					{ path: 'api', component: DocsAPISlideToggle },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'button-toggle', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewButtonToggle },
					{ path: 'examples', component: DocsExampleButtonToggle },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'list', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewList },
					{ path: 'examples', component: DocsExampleList },
					{ path: 'api', component: DocsAPIList },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'datepicker', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewDatepicker },
					{ path: 'api', component: DocsAPIDatepicker },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'menu', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewMenu },
					{ path: 'examples', component: DocsExampleMenu },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'expansion-panel', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewExpansion },
					{ path: '**', redirectTo: 'overview' }
				]
			},
			{
				path: 'icon', component: DocViewerComponent, children: [
					{ path: 'overview', component: DocsOverviewIcon },
					{ path: 'examples', component: DocsExampleIcon },
					{ path: '**', redirectTo: 'overview' }
				]
			}
		]
	},
	{
		path: 'guides', component: DocsGuideNav, children: DocsGuideRoutes
	},
	{ path: 'search', component: DocsSearch },
	{ path: 'showcases', component: DocsShowcase },
	{ path: '**', redirectTo: 'home' }
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);