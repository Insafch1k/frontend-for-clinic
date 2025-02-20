import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderLeftComponent } from './layout/header-left/header-left.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    HeaderLeftComponent,
  ],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule
  ]
})
export class AdminModule { }
