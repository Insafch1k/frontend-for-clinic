import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurSpecialistsComponent } from './our-specialists/our-specialists.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { BannerComponent } from './banner/banner.component';
import { WhyOurClinicComponent } from './why-our-clinic/why-our-clinic.component';

@NgModule({
  declarations: [MainComponent, OurSpecialistsComponent, BannerComponent, WhyOurClinicComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
