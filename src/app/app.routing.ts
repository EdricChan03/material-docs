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
        path: 'components', children: [
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
            }
        ]
    }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);