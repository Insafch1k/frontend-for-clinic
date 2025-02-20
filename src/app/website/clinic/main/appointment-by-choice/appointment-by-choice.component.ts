import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpecialistsService } from '../../modules/specialists/services/specialists.service';
import { Router } from '@angular/router';
import {
    IAvailableTime,
    IDoctor,
    ISpecialists,
} from '../../modules/specialists/spacialict.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BidService } from '../bid.service';
import { PushCodeComponent } from '../../components/push-code/push-code.component';

@Component({
    selector: 'app-appointment-by-choice',
    templateUrl: './appointment-by-choice.component.html',
    styleUrls: ['./appointment-by-choice.component.scss'],
})
export class AppointmentByChoiceComponent {
    appointmentTypes = ['Первичный', 'Вторичный'];
    services = ['Консультация', 'Осмотр', 'Лечение'];
    isSend: boolean = false;

    selectedTime: string = '';

    specialists: ISpecialists | null = null; // Хранение данных врачей
    displayDoctors: IDoctor[] = []; // Для хранения отображаемых врачей
    categories: string[] = [];
    appointmentForm: FormGroup;

    doctorData!: IDoctor;

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

    @Output() appointmentConfirmed = new EventEmitter<void>();

    confirmAppointment() {
        // Логика подтверждения записи на прием
        this.appointmentConfirmed.emit(); // Уведомляем родительский компонент
    }

    constructor(
        private readonly specServ: SpecialistsService,
        private fb: FormBuilder,
        private readonly bidServ: BidService
    ) {
        this.appointmentForm = this.fb.group({
            surname: ['', Validators.required],
            name: ['', Validators.required],
            dateTime: ['', [Validators.required]],
            phone: ['', [Validators.required, this.phoneValidator]],
            doctor: ['', Validators.required],
            speciality: ['', Validators.required],
            type: ['', Validators.required],
            serviceName: ['', Validators.required],
            consent: [false, Validators.requiredTrue],
        });
    }

    ngOnInit(): void {
        this.fetchSpecialists();
    }

    phoneValidator(control: any) {
        const phonePattern = /^(\+7|7|8)?[0-9]{10}$/;
        return phonePattern.test(control.value) ? null : { invalidPhone: true };
    }

    fetchSpecialists() {
        this.specServ.getSpecialists().subscribe((answer: ISpecialists) => {
            this.specialists = answer;
            this.displayDoctors = answer.data.doctors; // Инициализация отображаемых врачей
            this.categories = answer.data.categories;

            //this.fillDoctorsTimeSlots();
            console.log(answer);
        });
    }

    // Метод для отправки данных
    onSubmit() {
        if (this.appointmentForm.valid) {
            this.isSend = true;
            console.log(this.appointmentForm.value);
        }
    }

    onSelectDoctor(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const value = selectElement.value;
        this.specialists!.data.doctors.forEach((doctor: IDoctor) => {
            if (doctor.full_name === value) {
                this.doctorData = doctor;
                console.log(doctor.full_name);
                this.fillDoctorsTimeSlots();
            }
        });
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

    // Метод для выбора временного слота
    selectTimeSlot(time: string): void {
        this.selectedTime = time;
        this.appointmentForm.get('dateType')?.setValue(time);
        console.log(time, this.appointmentForm.value);
    }
}
