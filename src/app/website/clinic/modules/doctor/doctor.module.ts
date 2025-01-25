import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { SharedModule } from 'src/app/website/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './doctor.service';

@NgModule({
    declarations: [DoctorComponent, AppointmentComponent],
    imports: [
        DoctorRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    providers: [DoctorService],
})
export class DoctorModule {}
