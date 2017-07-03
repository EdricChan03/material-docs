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
                    { path: '**', redirectTo: 'overview'}
                ]
            }
        ]
    }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);