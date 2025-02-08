import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockRoutingModule } from './stock-routing.module';
import { DiscountsComponent } from './discounts/discounts.component';
import { StockLoadingComponent } from './stock-loading/stock-loading.component';
import { SharedModule } from 'src/app/website/shared/shared.module';
import { StockService } from './stock.service';

@NgModule({
    declarations: [StockComponent, DiscountsComponent, StockLoadingComponent],
    imports: [CommonModule, StockRoutingModule, SharedModule],
    providers: [StockService],
})
export class StockModule {}
