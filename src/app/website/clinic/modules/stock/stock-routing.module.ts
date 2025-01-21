import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TestsComponent } from './tests/tests.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
    {
        path: '',
        component: StockComponent,
        children: [
            {
                path: 'promotions',
                component: PromotionsComponent,
                title: 'Клиника 03 - Акции',
            },
            {
                path: 'tests',
                component: TestsComponent,
                title: 'Клиника 03 - Тесты',
            },
            {
                path: 'discountns',
                component: DiscountsComponent,
                title: 'Клиника 03 - Скидка',
            },
            {
                path: 'other',
                component: OtherComponent,
                title: 'Клиника 03 - Другое',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StockRoutingModule {}
