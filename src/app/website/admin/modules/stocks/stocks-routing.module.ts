import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { ChangeComponent } from './change/change.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
    {
        path: '',
        component: StocksComponent,
    },
    {
        path:'change',
        component: ChangeComponent,
    },
    {
        path:'new',
        component:NewComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StocksRoutingModule {}