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
        title: 'Админ - Анализы - Добавить анализ'
    },
    {
        path:'new-category',
        component:NewCategoryComponent,
        title:'Админ - Анализы - Добавить категорию'
    },
    {
        path:'change',
        component:ChangeComponent,
        title:'Админ - Анализы - Изменить анализ'
    },
    {
        path:'change-category',
        component:ChangeCategoryComponent,
        title:'Админ - Анализы - Изменить категорию'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalyzesRoutingModule {}