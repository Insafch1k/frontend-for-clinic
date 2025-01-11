import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';





@NgModule({
  declarations: [
    DoctorComponent,
    AppointmentComponent,
  ],
  imports: [
    CommonModule, DoctorRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class DoctorModule{ }
