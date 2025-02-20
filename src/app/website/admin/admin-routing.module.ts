import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
    {
      path: 'auth',
      loadChildren: () =>
        import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: '',
      component: AdminComponent,
      canActivate: [AdminGuard], // Защищаем только эти пути
      children: [
        { path: '', redirectTo: 'amenities', pathMatch: 'full' },
        {
          path: 'amenities',
          loadChildren: () =>
            import('./modules/amenities/amenities.module').then(
              (m) => m.AmenitiesModule
            ),
        },
        {
          path: 'analyzes',
          loadChildren: () =>
            import('./modules/analyzes/analyzes.module').then(
              (m) => m.AnalyzesModule
            ),
        },
        {
          path: 'doctors',
          loadChildren: () =>
            import('./modules/doctors/doctors.module').then(
              (m) => m.DoctorsModule
            ),
        },
        {
          path: 'stocks',
          loadChildren: () =>
            import('./modules/stocks/stocks.module').then(
              (m) => m.StocksModule
            ),
        },
      ],
    },
  ];
  


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
