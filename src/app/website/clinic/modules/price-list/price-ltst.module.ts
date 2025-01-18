import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceListRoutingModule } from './price-list-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PriceListComponent],
    imports: [
        CommonModule,
        PriceListRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
})
export class PriceListModule {}
