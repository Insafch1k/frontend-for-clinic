import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurSpecialistsComponent } from './our-specialists/our-specialists.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { BannerComponent } from './banner/banner.component';
import { WhyOurClinicComponent } from './why-our-clinic/why-our-clinic.component';
import { ReqRecordComponent } from './req-record/req-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperiorityComponent } from './superiority/superiority.component';

@NgModule({
    declarations: [
        MainComponent,
        OurSpecialistsComponent,
        BannerComponent,
        WhyOurClinicComponent,
        ReqRecordComponent,
        SuperiorityComponent,
    ],
    imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
})
export class MainModule {}
