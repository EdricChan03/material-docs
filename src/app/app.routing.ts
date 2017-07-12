import { DocsExampleCheckbox } from './partials/examplecheckbox.component';
import { DocsShowcase } from './partials/showcase/showcase.component';
import { DocsSearch } from './partials/search.component';
import { DocsHomePage } from './partials/homepages/docshome.component';
import { DocsGuideNav } from './partials/guides/guidenav.component';
import { DocsGettingStartedGuide } from './partials/guides/gettingstarted.component';
import { DocsOverviewCheckbox } from './partials/overviewcheckbox.component';
import { DocsOverviewIcon } from './partials/overviewicon.component';
import { DocsExampleTooltip } from './partials/exampletooltip.component';
import { DocsOverviewTooltip } from './partials/overviewtooltip.component';
import { DocViewerComponent } from './shared/doc-viewer.component';
import { DocsOverviewBtn } from './partials/overviewbutton.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { DocsExampleBtn } from "./partials/examplebutton.component";
/**
 * The routes for the application
 * @type Routes[]
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
                    { path: '**', redirectTo: 'overview' }
                ]
            }
        ]
    },
    {
        path: 'guides', component: DocsGuideNav, children: [
            {
                path: 'getting-started', component: DocsGettingStartedGuide
            }
        ]
    },
    {
        path: 'search', component: DocsSearch
    },
    {
        path: 'showcases', component: DocsShowcase
    }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);