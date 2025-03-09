import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

interface IDoctor {
    id: number;
    full_name: string;
    id_easyclinic: number;
    available_times: any[];
}

interface IService {
    id: number;
    name: string;
    price: number;
}

interface IDay {
    day: string;
    isSelect: boolean;
    slot: {
        isSelect: boolean;
        state: string;
        time: string;
    }[];
    day_id: number; // Добавляем day_id в интерфейс
}

@Component({
    selector: 'app-appointment-by-choice',
    templateUrl: './appointment-by-choice.component.html',
    styleUrls: ['./appointment-by-choice.component.scss'],
})
export class AppointmentByChoiceComponent {
    categories: any[] = [];
    displayDoctors: IDoctor[] = [];
    services: IService[] = [];
    selectedServicePrice: number = 0;
    isSend: boolean = false;
    selectedTime: string = '';
    doctorData!: IDoctor;
    showSuccessMessage: boolean = false;
    isOpenDayDoctor!: {
        currentIndex: number;
        currentView: number;
        displayedSlots: string[];
        lenght: number;
        days: IDay[]; // Используем интерфейс IDay
    };

    appointmentForm: FormGroup;

    @Output() appointmentConfirmed = new EventEmitter<void>();

    constructor(
        private readonly appointmentService: AppointmentService,
        private fb: FormBuilder
    ) {
        this.appointmentForm = this.fb.group({
            surname: ['', Validators.required],
            name: ['', Validators.required],
            phone: ['', [Validators.required, this.phoneValidator]],
            doctor: ['', Validators.required],
            speciality: ['', Validators.required],
            serviceName: ['', Validators.required],
            consent: [false, Validators.requiredTrue],
        });
    }

    ngOnInit(): void {
        this.fetchSpecialties();
    }

    phoneValidator(control: any) {
        const phonePattern = /^(\+7|7|8)?[0-9]{10}$/;
        return phonePattern.test(control.value) ? null : { invalidPhone: true };
    }

    fetchSpecialties() {
        this.appointmentService.getSpecialties().subscribe((specialties) => {
            this.categories = specialties;
        });
    }

    onSpecialityChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const specialtyId = selectElement.value;
        console.log('Selected specialty ID:', specialtyId); // Проверка выбранного specialty_id
    
        this.appointmentService.getServices(Number(specialtyId)).subscribe({
            next: (services) => {
                console.log('Services received:', services);
                this.services = services[0].services;
                this.appointmentService.getDoctors(Number(specialtyId)).subscribe({
                    next: (doctors) => {
                        console.log('Doctors received:', doctors);
                        this.displayDoctors = doctors;
                        if (doctors.length === 1) {
                            this.onDoctorChange({ target: { value: doctors[0].id } } as any);
                        }
                    },
                    error: (err) => {
                        console.error('Error fetching doctors:', err);
                    }
                });
            },
            error: (err) => {
                console.error('Error fetching services:', err);
            }
        });
    }
    

    onDoctorChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const doctorId = selectElement.value;
        const selectedDoctor = this.displayDoctors.find(doctor => doctor.id === Number(doctorId));
        if (selectedDoctor) {
            this.doctorData = selectedDoctor;
            this.appointmentService.getAvailableTimes(selectedDoctor.id_easyclinic).subscribe((times) => {
                this.doctorData.available_times = times.available_times;
                this.fillDoctorsTimeSlots();
            });
        }
    }

    onServiceChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        const serviceId = selectElement.value;
        const selectedService = this.services.find(service => service.id === Number(serviceId));
        if (selectedService) {
            this.selectedServicePrice = selectedService.price;
        }
    }

    onSubmit() {
        if (this.appointmentForm.valid) {
            this.isSend = true;
            const appointmentData = {
                fio: `${this.appointmentForm.value.surname} ${this.appointmentForm.value.name}`,
                day_id: this.isOpenDayDoctor.days[this.isOpenDayDoctor.currentView].day_id.toString(),
                time: this.selectedTime,
                mobile: this.appointmentForm.value.phone,
            };
            console.log('Отправляемые данные:', appointmentData); // Вывод данных в консоль
            this.appointmentService.createAppointment(appointmentData).subscribe(() => {
                // Обработка успеха
            });
        }
    }
    

    fillDoctorsTimeSlots() {
        const days: IDay[] = [];
        let currentIndex = 0;
        const endIndex = Math.min(
            currentIndex + 7,
            this.doctorData.available_times.length
        );
        const slots: string[] = [];
    
        for (let slot of this.doctorData.available_times) {
            const times: {
                isSelect: boolean;
                state: string;
                time: string;
            }[] = [];
    
            for (let timeq in slot.time) {
                const state = slot.time[timeq];
                times.push({
                    time: timeq,
                    isSelect: false,
                    state: state,
                });
            }
    
            if (times.length > 0) {
                days.push({
                    day: slot.date,
                    isSelect: false,
                    slot: times,
                    day_id: slot.day_id,
                });
                slots.push(slot.date);
            }
        }
    
        const displayedSlots = slots.slice(currentIndex, endIndex);
        this.isOpenDayDoctor = {
            currentIndex,
            displayedSlots,
            days,
            currentView: 0,
            lenght: days.length,
        };
    }
    
    scrollLeft() {
        if (this.isOpenDayDoctor.currentIndex > 0) {
            this.isOpenDayDoctor.currentIndex--;
            this.updateDisplayedSlots();
        }
    }

    scrollRight() {
        const keys = Object.keys(this.getDoctorSlotDates());
        if (this.isOpenDayDoctor.currentIndex + 7 < keys.length) {
            this.isOpenDayDoctor.currentIndex++;
            this.updateDisplayedSlots();
        }
    }

    private updateDisplayedSlots() {
        const keys = Object.keys(this.getDoctorSlotDates());
        const endIndex = Math.min(
            this.isOpenDayDoctor.currentIndex + 7,
            keys.length
        );
        this.isOpenDayDoctor.displayedSlots = keys.slice(
            this.isOpenDayDoctor.currentIndex,
            endIndex
        );
    }

    private getDoctorSlotDates(): any[] {
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

    selectTimeSlot(time: string): void {
        const selectedDay = this.isOpenDayDoctor.days[this.isOpenDayDoctor.currentView];
        const selectedSlot = selectedDay.slot.find(slot => slot.time === time);
        
        if (selectedSlot && selectedSlot.state === 'accepts_all') {
            this.selectedTime = time;
            selectedSlot.isSelect = true;
        }
    }
    
    confirmAppointment() {
        this.appointmentConfirmed.emit();
    }

    inputValue: string = '';

    onInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.inputValue = input.value;
    }

    confirmCode() {
        const code = this.inputValue; // Получаем введенный код
        const mobile = this.appointmentForm.value.phone; // Получаем номер телефона из формы
    
        this.appointmentService.confirmAppointment(code, mobile).subscribe({
            next: () => {
                // Установите переменную в true для отображения сообщения
                this.showSuccessMessage = true;
                // Скрыть сообщение через 3 секунды
                setTimeout(() => {
                    this.showSuccessMessage = false;
                }, 3000);
            },
            error: (err) => {
                console.error('Ошибка при подтверждении записи:', err);
            }
        });
    }
    
        
}