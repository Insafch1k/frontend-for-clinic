import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialistsComponent } from './specialists/specialists.component';
import { DoctorComponent } from './doctor/doctor.component';
const routes: Routes = [
    {
        path: 'profile/:id',
        component: DoctorComponent,
    },
    {
        path: '',
        component: SpecialistsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SpecialistsRoutingModule {}
