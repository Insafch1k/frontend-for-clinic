import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AmenitiesRoutingModule } from './amenities-routing.module';
import { ChangeComponent } from './change/change.component';
import { NewAmenitiesComponent } from './new-amenities/new-amenities.component';




@NgModule({
  declarations: [
    AmenitiesComponent,
    ChangeComponent,
    NewAmenitiesComponent
  ],
  imports: [
    CommonModule, AmenitiesRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AmenitiesModule{ }
