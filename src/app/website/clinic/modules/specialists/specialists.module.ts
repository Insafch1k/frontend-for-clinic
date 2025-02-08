import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialistsComponent } from './specialists/specialists.component';
import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsService } from './services/specialists.service';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SharedModule } from 'src/app/website/shared/shared.module';
import { DoctorService } from './services/doctor.service';
import { ChooseTimeComponent } from './choose-time/choose-time.component';

@NgModule({
    declarations: [
        SpecialistsComponent,
        DoctorComponent,
        AppointmentComponent,
        ChooseTimeComponent,
    ],
    imports: [
        CommonModule,
        SpecialistsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    providers: [SpecialistsService, DoctorService],
})
export class SpecialistsModule {}
