import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpecialistsService } from '../services/specialists.service';
import { ISpecialists, IDoctor } from '../spacialict.interface';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {
    appointmentTypes = ['Первичный', 'Вторичный'];
    services = ['Консультация', 'Осмотр', 'Лечение'];

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
            slot: boolean[];
        }[];
    };

    constructor(
        private readonly specServ: SpecialistsService,
        private fb: FormBuilder
    ) {
        this.appointmentForm = this.fb.group({
            surname: ['', Validators.required],
            name: ['', Validators.required],
            date: ['', [Validators.required]],
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

    @Output() appointmentConfirmed = new EventEmitter<void>();

    confirmAppointment() {
        // Логика подтверждения записи на прием
        this.appointmentConfirmed.emit(); // Уведомляем родительский компонент
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
            console.log(this.appointmentForm.value);
        }
    }

    onSelectDoctor(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const value = selectElement.value;
        this.specialists!.data.doctors.forEach((doctor: IDoctor) => {
            if (doctor.doctor.fullname === value) {
                this.doctorData = doctor;
                console.log(doctor.doctor.fullname);
                this.fillDoctorsTimeSlots();
            }
        });
    }

    //заполнить временные промежутки врачей
    fillDoctorsTimeSlots() {
        const days: {
            day: string;
            isSelect: boolean;
            slot: boolean[];
        }[] = [];
        for (let slot in this.doctorData.slot_date) {
            days.push({
                day: slot,
                isSelect: false,
                slot: this.doctorData.slot_date[slot].map(() => false),
            });
        }
        let currentIndex = 0;
        const keys = Object.keys(this.doctorData.slot_date);
        const endIndex = Math.min(currentIndex + 7, keys.length); // Убедимся, что не выйдем за пределы
        const displayedSlots = keys.slice(currentIndex, endIndex);
        this.isOpenDayDoctor = {
            currentIndex,
            displayedSlots,
            days,
            currentView: 0,
            lenght: Object.keys(this.doctorData.slot_date).length,
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
    private getDoctorSlotDates(): { [key: string]: any } {
        return this.doctorData ? this.doctorData.slot_date : {};
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
        console.log('Выбран временной слот:', time);
    }
}
