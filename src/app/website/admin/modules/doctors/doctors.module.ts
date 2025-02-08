import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { ChangeComponent } from './change/change.component';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    DoctorsComponent,
    ChangeComponent,
  ],
  imports: [
    CommonModule, DoctorsRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ]
})
export class DoctorsModule{ }
