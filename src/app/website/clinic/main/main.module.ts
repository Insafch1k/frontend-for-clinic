import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurSpecialistsComponent } from './our-specialists/our-specialists.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { BannerComponent } from './banner/banner.component';
import { WhyOurClinicComponent } from './why-our-clinic/why-our-clinic.component';
import { ReqRecordComponent } from './req-record/req-record.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperiorityComponent } from './superiority/superiority.component';
import { PhotoCollageComponent } from './photo-collage/photo-collage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmergencyServiceComponent } from './emergency-service/emergency-service.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from '../../shared/shared.module';
import { BidService } from './bid.service';
import { AppointmentByChoiceComponent } from './appointment-by-choice/appointment-by-choice.component';
import { SpecialistsService } from '../modules/specialists/services/specialists.service';
import { PushCodeComponent } from '../components/push-code/push-code.component';
import { DateFormatDirective } from './req-record/date.directive';
import { ChooseTimeComponent } from '../modules/specialists/choose-time/choose-time.component';
import { SpecialistsModule } from '../modules/specialists/specialists.module';

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
        EmergencyServiceComponent,
        MapComponent,
        AppointmentByChoiceComponent,
        DateFormatDirective,
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        PushCodeComponent,
        SpecialistsModule
    ],

    providers: [BidService, SpecialistsService],
})
export class MainModule {}
