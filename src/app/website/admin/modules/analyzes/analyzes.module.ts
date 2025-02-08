import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { AnalyzesRoutingModule } from './analyzes-routing.module';
import { ChangeComponent } from './change/change.component';
import { NewAnalyzesComponent } from './new-analyzes/new-analyzes.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ChangeCategoryComponent } from './change-category/change-category.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AnalyzesComponent,
    ChangeComponent,
    NewAnalyzesComponent,
    NewCategoryComponent,
    ChangeCategoryComponent
    
  ],
  imports: [
    CommonModule, AnalyzesRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ]
})
export class AnalyzesModule{ }
