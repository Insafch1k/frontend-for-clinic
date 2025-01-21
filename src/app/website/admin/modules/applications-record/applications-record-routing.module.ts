import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsRecordComponent } from './applications-record/applications-record.component';
import { ChangeComponent } from './change/change.component';
import { NewRecordComponent } from './new-record/new-record.component';


const routes: Routes = [
    {
        path: '',
        component: ApplicationsRecordComponent,
    },
    {
        path:'change',
        component:ChangeComponent,
        title:'Изменение записи'
    },
    {
        path:'new-record',
        component:NewRecordComponent,
        title:'Новая запись'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationsRecordRoutingModule {}