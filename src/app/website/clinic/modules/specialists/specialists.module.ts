import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialistsComponent } from './specialists/specialists.component';
import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsService } from './specialists.service';

@NgModule({
    declarations: [SpecialistsComponent],
    imports: [
        CommonModule,
        SpecialistsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [SpecialistsService],
})
export class SpecialistsModule {}
