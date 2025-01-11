import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderTopAdminComponent } from './pages/header-top-admin/header-top-admin.component';
import { HeaderLeftAdminComponent } from './pages/header-left-admin/header-left-admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    HeaderTopAdminComponent,
    HeaderLeftAdminComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
