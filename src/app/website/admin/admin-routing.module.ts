import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AmenitiesComponent } from './pages/amenities/amenities.component';
import { AnalyzesComponent } from './pages/analyzes/analyzes.component';

import { DoctorsComponent } from './pages/doctors/doctors.component';
import { RecordsComponent } from './pages/records/records.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
    },
    {
        path: 'amenities',
        component: AmenitiesComponent,
    },
    {
        path: 'analyzes',
        component: AnalyzesComponent,
    },
    {
        path: 'doctors',
        component: DoctorsComponent,
    },
    {
        path: 'records',
        component: RecordsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
