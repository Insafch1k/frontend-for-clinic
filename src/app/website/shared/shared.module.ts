import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AboutModule } from '../modules/about/about.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

import { RouterModule } from '@angular/router';
import { BurgerMenuComponent } from './layout/header/burger-menu/burger-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BurgerMenuComponent,
  ],
  imports: [
    BrowserModule,
    AboutModule,
    RouterModule
  ],
  providers: [],
  exports: [CommonModule, HeaderComponent, FooterComponent],
})
export class SharedModule { }
