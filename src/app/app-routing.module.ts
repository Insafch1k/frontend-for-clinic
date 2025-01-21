import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'admin',
        loadChildren: () =>
            import('./website/admin/admin.module').then((m) => m.AdminModule),
        title: 'Клиника 03 - Админка',
    },
    {
        path: '',
        loadChildren: () =>
            import('./website/clinic/clinic.module').then(
                (m) => m.ClinicModule
            ),
        title: 'Клиника 03 - Главная',
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
