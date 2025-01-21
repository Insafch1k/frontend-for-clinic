import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsRoutingModule } from './doctors-routing.module';






@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule, DoctorsRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class DoctorsModule{ }
