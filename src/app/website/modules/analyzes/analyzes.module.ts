import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnalyzesRoutingModule } from './analyzes-routing.module';
import { AnalyzesComponent } from './analyzes/analyzes.component';


@NgModule({
  declarations: [
    AnalyzesComponent
  ],
  imports: [
    CommonModule, AnalyzesRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AnalyzesModule{ }
