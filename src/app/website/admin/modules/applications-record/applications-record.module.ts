import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationsRecordComponent } from './applications-record/applications-record.component';
import { ApplicationsRecordRoutingModule } from './applications-record-routing.module';
import { NewRecordComponent } from './new-record/new-record.component';
import { ChangeComponent } from './change/change.component';






@NgModule({
  declarations: [
    ApplicationsRecordComponent,
    NewRecordComponent,
    ChangeComponent,
  ],
  imports: [
    CommonModule, ApplicationsRecordRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class ApplicationsRecordModule{ }
