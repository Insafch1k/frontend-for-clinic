import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Добавляем этот импорт
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Добавляем сюда
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
})
export class AuthModule {}