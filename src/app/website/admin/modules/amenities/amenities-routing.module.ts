import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ChangeComponent } from './change/change.component';
import { NewAmenitiesComponent } from './new-amenities/new-amenities.component';
const routes: Routes = [
    {
        path: '',
        component: AmenitiesComponent,
    },
    {
        path: 'change/:id',
        component:ChangeComponent,
        title:'Изменить услугу'
    },
    {
        path:'new',
        component:NewAmenitiesComponent,
        title:'Добавить услугу'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AmenitiesRoutingModule {}