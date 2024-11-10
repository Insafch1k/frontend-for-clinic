import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './website/shared/pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        title: 'main',
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./website/modules/about/about.module').then(
                (m) => m.AboutModule
            ),
        title: 'about',
    },
    {
        path: 'analyzes',
        loadChildren: () =>
            import('./website/modules/analyzes/analyzes.module').then(
                (m) => m.AnalyzesModule
            ),
        title: 'analyzes',
    },
    {
        path: 'specialists',
        loadChildren: () =>
            import('./website/modules/specialists/specialists.module').then(
                (m) => m.SpecialistsModule
            ),
        title: 'specialists',
    },
    {
        path: '**',
        component: MainComponent,
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
