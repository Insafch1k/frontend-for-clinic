import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { NewAnalyzesComponent } from './new-analyzes/new-analyzes.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ChangeComponent } from './change/change.component';
import { ChangeCategoryComponent } from './change-category/change-category.component';

const routes: Routes = [
    {
        path: '',
        component: AnalyzesComponent,
    },
    {
        path:'new',
        component:NewAnalyzesComponent,
        title: 'Новый анализ'
    },
    {
        path:'new-category',
        component:NewCategoryComponent,
        title:'Новая категория'
    },
    {
        path:'change',
        component:ChangeComponent,
        title:'Изменить анализ'
    },
    {
        path:'change-category',
        component:ChangeCategoryComponent,
        title:'Изменить категорию'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalyzesRoutingModule {}