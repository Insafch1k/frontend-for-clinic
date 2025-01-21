import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
{
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'amenities', pathMatch: 'full' },
            {
                path: 'amenities',
                loadChildren: () =>
                    import('./modules/amenities/amenities.module').then(
                        (m) => m.AmenitiesModule
                    ),
                title: 'Админ - Услуги',
            },
            {
                path: 'analyzes',
                loadChildren: () =>
                    import('./modules/analyzes/analyzes.module').then(
                        (m) => m.AnalyzesModule
                    ),
                title: 'Админ - Анализы',
            },
            {
                path: 'applications-record',
                loadChildren: () =>
                    import('./modules/applications-record/applications-record.module').then(
                        (m) => m.ApplicationsRecordModule
                    ),
                title: 'Админ - Заявки на запись',
            },
            {
                path: 'doctors',
                loadChildren: () =>
                    import('./modules/doctors/doctors.module').then(
                        (m) => m.DoctorsModule
                    ),
                title: 'Админ - Специалисты',
            },
            {
                path: 'stocks',
                loadChildren: () =>
                    import('./modules/stocks/stocks.module').then(
                        (m) => m.StocksModule
                    ),
                title: 'Админ - Анализы',
            },
            {
                path: '**',
                redirectTo: 'amenities',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
