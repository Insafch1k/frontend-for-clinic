import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MonthYearPipe } from '../clinic/main/reviews/pipes/month-year.pipe';
import { PhoneFormatPipe } from '../clinic/main/reviews/pipes/phone-format.pipe';
import { ReviewDatePipe } from '../clinic/main/reviews/pipes/review-date.pipe';

@NgModule({
    declarations: [ReviewDatePipe, MonthYearPipe, PhoneFormatPipe],
    imports: [RouterModule, HttpClientModule],
    exports: [
        CommonModule,
        HttpClientModule,
        ReviewDatePipe,
        MonthYearPipe,
        PhoneFormatPipe,
    ],
})
export class SharedModule {}
