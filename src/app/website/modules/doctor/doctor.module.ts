import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';




@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule, DoctorRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class DoctorModule{ }
