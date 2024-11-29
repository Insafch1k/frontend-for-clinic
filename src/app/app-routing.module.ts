import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {
        path: 'main',
        loadChildren: () =>
            import('./website/main/main.module').then((m) => m.MainModule),
        title: 'Главная',
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
        path: 'doctor',
        loadChildren: () =>
            import('./website/modules/doctor/doctor.module').then(
                (m) => m.DoctorModule
            ),
        title: 'specialists',
    },
    {
        path: '**',
        //component: MainComponent,
        redirectTo: 'main',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
