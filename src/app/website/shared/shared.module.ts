import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AboutModule } from '../modules/about/about.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';
import { OurSpecialistsComponent } from './pages/main/our-specialists/our-specialists.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OurSpecialistsComponent,
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
