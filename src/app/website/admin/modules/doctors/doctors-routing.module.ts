import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
  },
  {
    path: 'change/:id', // Обновляем маршрут, чтобы он передавал параметр id
    component: ChangeComponent,
    title: "Админ - Специалисты - Изменить"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
