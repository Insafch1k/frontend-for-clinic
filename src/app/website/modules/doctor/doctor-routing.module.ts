import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
    {
        path: '',
        component: DoctorComponent,
    },
    {
        path:'zap',
        component:AppointmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DoctorRoutingModule {}