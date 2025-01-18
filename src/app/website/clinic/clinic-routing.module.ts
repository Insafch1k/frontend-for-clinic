import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicComponent } from './clinic.component';

const routes: Routes = [
    {
        path: '',
        component: ClinicComponent,
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            {
                path: 'main',
                loadChildren: () =>
                    import('./main/main.module').then((m) => m.MainModule),
                title: 'Главная',
            },
            {
                path: 'about',
                loadChildren: () =>
                    import('./modules/about/about.module').then(
                        (m) => m.AboutModule
                    ),
                title: 'Главная - о нас',
            },
            {
                path: 'analyzes',
                loadChildren: () =>
                    import('./modules/analyzes/analyzes.module').then(
                        (m) => m.AnalyzesModule
                    ),
                title: 'Главная - анализы',
            },
            {
                path: 'price-list',
                loadChildren: () =>
                    import('./modules/price-list/price-ltst.module').then(
                        (m) => m.PriceListModule
                    ),
                title: 'Главная - прайс-лист',
            },
            {
                path: 'specialists',
                loadChildren: () =>
                    import('./modules/specialists/specialists.module').then(
                        (m) => m.SpecialistsModule
                    ),
                title: 'Главная - специалисты',
            },
            {
                path: 'doctor',
                loadChildren: () =>
                    import('./modules/doctor/doctor.module').then(
                        (m) => m.DoctorModule
                    ),
                title: 'Главная - доктор',
            },
            {
                path: '**',
                redirectTo: 'main',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClinicRoutingModule {}
