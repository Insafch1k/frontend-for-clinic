import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StocksComponent } from './stocks/stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { ChangeComponent } from './change/change.component';
import { NewComponent } from './new/new.component';







@NgModule({
  declarations: [
    StocksComponent,
    ChangeComponent,
    NewComponent
  ],
  imports: [
    CommonModule, StocksRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class StocksModule{ }
