import { Component, Input } from '@angular/core';
import { IAvailableTime, IDoctor } from '../spacialict.interface';

@Component({
    selector: 'app-choose-time',
    templateUrl: './choose-time.component.html',
    styleUrls: ['./choose-time.component.scss'],
})
export class ChooseTimeComponent {
    @Input() doctorData!: IDoctor;
    isOpenAppointment: boolean = false;

    isOpenDayDoctor!: {
        currentIndex: number;
        currentView: number;
        displayedSlots: string[];
        lenght: number;
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
        this.fillDoctorsTimeSlots();
        console.log(this.doctorData, this.isOpenDayDoctor);
    }

    //заполнить временные промежутки врачей
    fillDoctorsTimeSlots() {
        const days: {
            day: string;
            isSelect: boolean;
            slot: {
                isSelect: boolean;
                state: string;
                time: string;
            }[];
        }[] = [];
        let currentIndex = 0;
        const endIndex = Math.min(
            currentIndex + 7,
            this.doctorData.available_times.length
        ); // Убедимся, что не выйдем за пределы
        const slots: string[] = [];
        for (let slot of this.doctorData.available_times) {
            const times: {
                isSelect: boolean;
                state: string;
                time: string;
            }[] = [];
            for (let timeq in slot.time) {
                times.push({
                    time: timeq,
                    isSelect: false,
                    state: slot.time[timeq],
                });
            }
            days.push({
                day: slot.date,
                isSelect: false,
                slot: times,
            });
            slots.push(slot.date);
        }
        const displayedSlots = slots.slice(currentIndex, endIndex);
        this.isOpenDayDoctor = {
            currentIndex,
            displayedSlots,
            days,
            currentView: 0,
            lenght: this.doctorData.available_times.length,
        };
    }

    // Метод для прокрутки влево
    scrollLeft() {
        if (this.isOpenDayDoctor.currentIndex > 0) {
            this.isOpenDayDoctor.currentIndex--;
            this.updateDisplayedSlots();
        }
    }

    // Метод для прокрутки вправо
    scrollRight() {
        const keys = Object.keys(this.getDoctorSlotDates());
        if (this.isOpenDayDoctor.currentIndex + 7 < keys.length) {
            this.isOpenDayDoctor.currentIndex++;
            this.updateDisplayedSlots();
        }
    }

    // Метод для обновления отображаемых слотов
    private updateDisplayedSlots() {
        const keys = Object.keys(this.getDoctorSlotDates()); // Получаем все доступные слоты для врача
        const endIndex = Math.min(
            this.isOpenDayDoctor.currentIndex + 7,
            keys.length
        );
        this.isOpenDayDoctor.displayedSlots = keys.slice(
            this.isOpenDayDoctor.currentIndex,
            endIndex
        );
    }

    // Метод для получения временных слотов врача по ID
    private getDoctorSlotDates(): IAvailableTime[] {
        return this.doctorData ? this.doctorData.available_times : [];
    }

    selectDay(dayIndex: number) {
        this.isOpenDayDoctor.days.forEach((day: any) => {
            day.isSelect = false;
        });
        this.isOpenDayDoctor.currentView = dayIndex;
        this.isOpenDayDoctor.days[dayIndex].isSelect =
            !this.isOpenDayDoctor.days[dayIndex].isSelect;
    }

    // Метод для получения дня недели и месяца
    getDayOfWeekAndMonth(date: string): string {
        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        const months = [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ];
        const dayIndex = new Date(date).getDay();
        const monthIndex = new Date(date).getMonth();
        return `${daysOfWeek[dayIndex]}, ${months[monthIndex]}`;
    }

    //Метод для выбора временного слота
    openAppointment(): void {
        this.isOpenAppointment = !this.isOpenAppointment;
    }

    //Метод для выбора временного слота
    selectTimeSlot(time: string): void {
        this.isOpenAppointment = true;
        console.log(this.isOpenAppointment);
    }
}
