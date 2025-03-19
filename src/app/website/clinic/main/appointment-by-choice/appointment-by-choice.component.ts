import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    day_id: number;
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
    showErrorMessage: boolean = false;
    isOpenDayDoctor!: {
        currentIndex: number;
        currentView: number;
        displayedSlots: string[];
        lenght: number;
        days: IDay[];
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
        const phonePattern = /^\+7[0-9]{10}$/;
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
        console.log('Selected specialty ID:', specialtyId);

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
                mobile: this.appointmentForm.value.phone.replace('+7', ''),
            };
            console.log('Отправляемые данные:', appointmentData);
    
            this.appointmentService.createAppointment(appointmentData).subscribe({
                next: () => {
                    // Обработка успеха
                    console.log('Запись успешно создана');
                },
                error: (err) => {
                    // Обработка ошибки
                    console.error('Ошибка при отправке данных:', err);
                    this.showErrorMessage = true;
                }
            });
        }
    }

    fillDoctorsTimeSlots() {
        const days: IDay[] = [];
        let currentIndex = 0;
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
    
        const displayedSlots = slots.slice(currentIndex, currentIndex + 7);
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
            this.updateCurrentView();
        }
    }
    
    scrollRight() {
        if (this.isOpenDayDoctor.currentIndex + 7 < this.isOpenDayDoctor.days.length) {
            this.isOpenDayDoctor.currentIndex++;
            this.updateDisplayedSlots();
            this.updateCurrentView();
        }
    }
    private updateDisplayedSlots() {
        const endIndex = Math.min(
            this.isOpenDayDoctor.currentIndex + 7,
            this.isOpenDayDoctor.days.length
        );
        this.isOpenDayDoctor.displayedSlots = this.isOpenDayDoctor.days
            .slice(this.isOpenDayDoctor.currentIndex, endIndex)
            .map(day => day.day);
    }
    

    private updateCurrentView() {
        // Обновляем currentView, чтобы отображать правильный день
        this.isOpenDayDoctor.currentView = this.isOpenDayDoctor.currentIndex;
        // Сбрасываем выбранное время при смене дня
        this.selectedTime = '';
        this.isOpenDayDoctor.days.forEach(day => {
            day.isSelect = false;
            day.slot.forEach(slot => {
                slot.isSelect = false;
            });
        });
        // Устанавливаем текущий день как выбранный
        if (this.isOpenDayDoctor.days[this.isOpenDayDoctor.currentView]) {
            this.isOpenDayDoctor.days[this.isOpenDayDoctor.currentView].isSelect = true;
        }
    }
    

    private getDoctorSlotDates(): any[] {
        return this.doctorData ? this.doctorData.available_times : [];
    }

    selectDay(dayIndex: number) {
        const absoluteIndex = this.isOpenDayDoctor.currentIndex + dayIndex;
        if (absoluteIndex >= 0 && absoluteIndex < this.isOpenDayDoctor.days.length) {
            this.isOpenDayDoctor.days.forEach((day: any) => {
                day.isSelect = false;
            });
            this.isOpenDayDoctor.currentView = absoluteIndex;
            this.isOpenDayDoctor.days[absoluteIndex].isSelect = true;
            // Сбрасываем выбранное время при смене дня
            this.selectedTime = '';
        }
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
    
        if (selectedSlot && (selectedSlot.state === 'accepts_all' || selectedSlot.state === 'temp_block')) {
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
        const code = this.inputValue;
        const mobile = this.appointmentForm.value.phone.replace('+7', '');

        this.appointmentService.confirmAppointment(code, mobile).subscribe({
            next: () => {
                this.showSuccessMessage = true;
                this.showErrorMessage = false;
                setTimeout(() => {
                    this.showSuccessMessage = false;
                }, 3000);
            },
            error: (err) => {
                console.error('Ошибка при подтверждении записи:', err);
                this.showErrorMessage = true;
                this.showSuccessMessage = false;
            }
        });
    }

    addPlusSeven(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.value === '') {
            input.value = '+7';
        }
    }

    formatPhoneNumber(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.value === '+7') {
            input.value = '';
        } else if (!input.value.startsWith('+7')) {
            input.value = '+7' + input.value;
        }
        // Удаляем все символы, кроме цифр и +
        input.value = input.value.replace(/[^0-9+]/g, '');
        // Ограничиваем длину до 12 символов (включая +7)
        if (input.value.length > 12) {
            input.value = input.value.slice(0, 12);
        }
    }
}
