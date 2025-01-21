import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecordsComponent } from './records/records.component';
import { RecordsRoutingModule } from './records-routing.module';







@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    CommonModule, RecordsRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class RecordsModule{ }
