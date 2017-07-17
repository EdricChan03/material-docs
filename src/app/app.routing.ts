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
import { DocsThemingGuide } from './partials/guides/theming.component';
import { DocsGettingStartedGuide } from './partials/guides/gettingstarted.component';
import { DocsGuideNav } from './partials/guides/guidenav.component';

// Examples
// Autocomplete

// Button
import { DocsOverviewBtn } from './partials/docs/button/overviewbutton.component';
import { DocsExampleBtn } from "./partials/docs/button/examplebutton.component";
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
import { DocsShowcase } from './partials/showcase/showcase.component';
import { DocsSearch } from './partials/search.component';
import { DocsHomePage } from './partials/homepages/docshome.component';
import { DocViewerComponent } from './shared/doc-viewer.component';
import { AppComponent } from './app.component';

// Modules
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
/**
 * The routes for the application
 * @type {Routes}
 */
export const AppRoutes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    {
        path: 'components', component: DocsHomePage, children: [
            {
                path: 'button', component: DocViewerComponent, children: [
                    { path: 'overview', component: DocsOverviewBtn },
                    { path: 'examples', component: DocsExampleBtn },
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
            }
        ]
    },
    {
        path: 'guides', component: DocsGuideNav, children: [
            { path: 'getting-started', component: DocsGettingStartedGuide },
            { path: 'theming', component: DocsThemingGuide }
        ]
    },
    { path: 'search', component: DocsSearch },
    { path: 'showcases', component: DocsShowcase },
    { path: '**', redirectTo: '/' }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);