import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAvailableTime, IDoctor } from '../spacialict.interface';

@Component({
    selector: 'app-choose-time',
    templateUrl: './choose-time.component.html',
    styleUrls: ['./choose-time.component.scss'],
})
export class ChooseTimeComponent implements OnInit, OnChanges {
    @Input() doctorData!: IDoctor;

    isOpenAppointment: boolean = false;
    isOpenDayDoctor!: {
        currentIndex: number;
        currentView: number;
        displayedSlots: string[];
        length: number;
        days: {
            day: string;
            isSelect: boolean;
            slot: {
                isSelect: boolean;
                state: string;
                time: string;
            }[];
        }[];
    };

    ngOnInit() {
        if (this.doctorData && this.doctorData.available_times) {
            this.fillDoctorsTimeSlots();
        } else {
            console.error("doctorData или available_times пусты");
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['doctorData']) {
            console.log('Обновлены данные врача:', this.doctorData);
            this.fillDoctorsTimeSlots();
        }
    }

    fillDoctorsTimeSlots() {
        if (!this.doctorData?.available_times) return;

        const days = this.doctorData.available_times.map(slot => ({
            day: slot.date,
            isSelect: false,
            slot: Object.entries(slot.time).map(([time, state]) => ({
                time,
                isSelect: false,
                state
            }))
        }));

        this.isOpenDayDoctor = {
            currentIndex: 0,
            currentView: 0,
            displayedSlots: days.slice(0, 7).map(day => day.day),
            days,
            length: days.length
        };
    }

    scrollLeft() {
        if (this.isOpenDayDoctor?.currentIndex > 0) {
            this.isOpenDayDoctor.currentIndex--;
            this.updateDisplayedSlots();
        }
    }

    scrollRight() {
        if (this.isOpenDayDoctor?.currentIndex + 7 < this.isOpenDayDoctor.length) {
            this.isOpenDayDoctor.currentIndex++;
            this.updateDisplayedSlots();
        }
    }

    private updateDisplayedSlots() {
        if (!this.isOpenDayDoctor) return;
        const endIndex = Math.min(this.isOpenDayDoctor.currentIndex + 7, this.isOpenDayDoctor.length);
        this.isOpenDayDoctor.displayedSlots = this.isOpenDayDoctor.days
            .slice(this.isOpenDayDoctor.currentIndex, endIndex)
            .map(day => day.day);
    }

    selectDay(dayIndex: number) {
        if (!this.isOpenDayDoctor || dayIndex < 0 || dayIndex >= this.isOpenDayDoctor.days.length) return;

        this.isOpenDayDoctor.days.forEach(day => day.isSelect = false);
        this.isOpenDayDoctor.currentView = dayIndex;
        this.isOpenDayDoctor.days[dayIndex].isSelect = true;
    }

    getDayOfWeekAndMonth(date: string): string {
        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

        const dateObj = new Date(date);
        return `${daysOfWeek[dateObj.getDay()]}, ${months[dateObj.getMonth()]}`;
    }

    openAppointment(): void {
        this.isOpenAppointment = !this.isOpenAppointment;
    }

    selectTimeSlot(time: string): void {
        this.isOpenAppointment = true;
        console.log('Выбранное время:', time);
    }
}
