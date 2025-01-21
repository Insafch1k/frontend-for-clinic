import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockRoutingModule } from './stock-routing.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { TestsComponent } from './tests/tests.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { OtherComponent } from './other/other.component';
import { StockLoadingComponent } from './stock-loading/stock-loading.component';

@NgModule({
    declarations: [
        StockComponent,
        PromotionsComponent,
        TestsComponent,
        DiscountsComponent,
        OtherComponent,
        StockLoadingComponent,
    ],
    imports: [CommonModule, StockRoutingModule],
})
export class StockModule {}
