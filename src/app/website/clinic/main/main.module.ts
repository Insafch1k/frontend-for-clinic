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
import { PhotoCollageComponent } from './photo-collage/photo-collage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewDatePipe } from './reviews/pipes/review-date.pipe';
import { MonthYearPipe } from './reviews/pipes/month-year.pipe';
import { PhoneFormatPipe } from './reviews/pipes/phone-format.pipe';
import { EmergencyServiceComponent } from './emergency-service/emergency-service.component';
import { MapComponent } from './map/map.component';

@NgModule({
    declarations: [
        MainComponent,
        OurSpecialistsComponent,
        BannerComponent,
        WhyOurClinicComponent,
        ReqRecordComponent,
        SuperiorityComponent,
        PhotoCollageComponent,
        ReviewsComponent,
        ReviewDatePipe,
        MonthYearPipe,
        PhoneFormatPipe,
        EmergencyServiceComponent,
        MapComponent,
    ],
    imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
})
export class MainModule {}
