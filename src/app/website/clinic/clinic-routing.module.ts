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
                title: 'О нас',
            },
            {
                path: 'analyzes',
                loadChildren: () =>
                    import('./modules/analyzes/analyzes.module').then(
                        (m) => m.AnalyzesModule
                    ),
                title: 'Анализы',
            },
            {
                path: 'price-list',
                loadChildren: () =>
                    import('./modules/price-list/price-ltst.module').then(
                        (m) => m.PriceListModule
                    ),
                title: 'Прайс-лист',
            },
            {
                path: 'specialists',
                loadChildren: () =>
                    import('./modules/specialists/specialists.module').then(
                        (m) => m.SpecialistsModule
                    ),
                title: 'Cпециалисты',
            },
            {
                path: 'stock',
                loadChildren: () =>
                    import('./modules/stock/stock.module').then(
                        (m) => m.StockModule
                    ),
                title: 'Акции',
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
