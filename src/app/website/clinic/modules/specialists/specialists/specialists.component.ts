import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    IDoctor,
    ISpecialists,
} from 'src/app/website/core/types/spacialict.interface';
import { SpecialistsService } from '../specialists.service';

@Component({
    selector: 'app-specialists',
    templateUrl: './specialists.component.html',
    styleUrls: ['./specialists.component.scss'],
})
export class SpecialistsComponent implements OnInit {
    experiences: string[] = ['0-3 года', '3-5 лет', '5-10 лет', '10+ лет'];

    specialists: ISpecialists | null = null; // Хранение данных врачей
    displayDoctors: IDoctor[] = []; // Для хранения отображаемых врачей
    categories: string[] = [];

    showHouseCallOnly: boolean = false; // Флаг для фильтрации
    selectedDoctorCategory!: string;
    selectedExperience!: string;
    experienceRange: [number, number] = [0, Infinity];

    isOpenDayDoctor: {
        doctorId: number;
        currentIndex: number;
        currentView: number;
        displayedSlots: string[];
        lenght: number;
        days: {
            day: string;
            isSelect: boolean;
            slot: boolean[];
        }[];
    }[] = [];

    // Массивы для дат и временных слотов
    selectedCategory: string | null = null;

    constructor(
        private readonly specServ: SpecialistsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.fetchSpecialists();
    }

    fetchSpecialists() {
        this.specServ.getSpecialists().subscribe((answer: ISpecialists) => {
            this.specialists = answer;
            this.displayDoctors = answer.data.doctors; // Инициализация отображаемых врачей
            this.categories = answer.data.categories;

            this.fillDoctorsTimeSlots();
            console.log(answer);
        });
    }

    getSlotDateKeys(slotDate: { [key: string]: string[] }): string[] {
        const keys = Object.keys(slotDate);
        return keys.slice(0, 7); // Возвращаем первые 7 элементов или меньше
    }

    get getDisplayDoctors() {
        return this.displayDoctors;
    }

    //заполнить временные промежутки врачей
    fillDoctorsTimeSlots() {
        this.displayDoctors.forEach((doctor: IDoctor) => {
            const days: {
                day: string;
                isSelect: boolean;
                slot: boolean[];
            }[] = [];
            for (let slot in doctor.slot_date) {
                days.push({
                    day: slot,
                    isSelect: false,
                    slot: doctor.slot_date[slot].map(() => false),
                });
            }
            let currentIndex = 0;
            const keys = Object.keys(doctor.slot_date);
            const endIndex = Math.min(currentIndex + 7, keys.length); // Убедимся, что не выйдем за пределы
            const displayedSlots = keys.slice(currentIndex, endIndex);
            this.isOpenDayDoctor.push({
                doctorId: doctor.doctor.doctor_id,
                currentIndex,
                displayedSlots,
                days,
                currentView: 0,
                lenght: Object.keys(doctor.slot_date).length,
            });
        });
    }

    // Метод для прокрутки влево
    scrollLeft(doctorId: number) {
        const doctor = this.isOpenDayDoctor.find(
            (d) => d.doctorId === doctorId
        );
        if (doctor) {
            if (doctor.currentIndex > 0) {
                doctor.currentIndex--;
                this.updateDisplayedSlots(doctor);
            }
        }
    }

    // Метод для прокрутки вправо
    scrollRight(doctorId: number) {
        const doctor = this.isOpenDayDoctor.find(
            (d) => d.doctorId === doctorId
        );
        if (doctor) {
            const keys = Object.keys(this.getDoctorSlotDates(doctorId));
            if (doctor.currentIndex + 7 < keys.length) {
                doctor.currentIndex++;
                this.updateDisplayedSlots(doctor);
            }
        }
    }

    // Метод для получения временных слотов врача по ID
    private getDoctorSlotDates(doctorId: number): { [key: string]: any } {
        const doctor = this.displayDoctors.find(
            (d) => d.doctor.doctor_id === doctorId
        );
        return doctor ? doctor.slot_date : {};
    }

    // Метод для обновления отображаемых слотов
    private updateDisplayedSlots(doctor: any) {
        const keys = Object.keys(this.getDoctorSlotDates(doctor.doctorId)); // Получаем все доступные слоты для врача
        const endIndex = Math.min(doctor.currentIndex + 7, keys.length);
        doctor.displayedSlots = keys.slice(doctor.currentIndex, endIndex);
    }

    selectDay(doctorId: any, dayIndex: number) {
        this.isOpenDayDoctor.forEach((doctor: any, index: number) => {
            if (doctorId === doctor.doctorId) {
                this.isOpenDayDoctor[index].days.forEach((day: any) => {
                    day.isSelect = false;
                });
                this.isOpenDayDoctor[index].currentView = dayIndex;
                this.isOpenDayDoctor[index].days[dayIndex].isSelect =
                    !this.isOpenDayDoctor[index].days[dayIndex].isSelect;
            }
        });
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
    selectTimeSlot(time: string): void {
        // this.selectedTime = time;
        // console.log('Выбран временной слот:', time);
    }

    // Метод для фильтрации докторов по категории
    onCategoryChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedCategory = selectElement.value;
        this.allFliter();
    }

    // Метод для фильтрации докторов по стажу
    filterDoctorsByExperience(event: Event): void {
        const selectedExperience = (event.target as HTMLSelectElement).value;
        // Здесь вы можете фильтровать докторов на основе selectedExperience
        // Например, преобразуем строку в нужный диапазон лет стажа
        switch (selectedExperience) {
            case '0-3 года':
                this.experienceRange = [0, 3];
                break;
            case '3-5 лет':
                this.experienceRange = [3, 5];
                break;
            case '5-10 лет':
                this.experienceRange = [5, 10];
                break;
            case '10+ лет':
                this.experienceRange = [10, Infinity];
                break;
            default:
                this.experienceRange = [0, Infinity];
                break;
        }
        this.allFliter();
    }

    // Метод для фильтрации докторов по вызову на дом
    toggleHouseCallDoctors() {
        console.log(this.showHouseCallOnly);
        this.showHouseCallOnly = !this.showHouseCallOnly; // Переключение флага
        this.allFliter();
    }

    // Общая фильтрация
    allFliter() {
        let doctors: IDoctor[] = [];
        this.specialists?.data.doctors.forEach((doctor: IDoctor) => {
            console.log(
                doctor.doctor.experience >= this.experienceRange[0],
                doctor.doctor.experience < this.experienceRange[1],
                !this.showHouseCallOnly ||
                    (this.showHouseCallOnly &&
                        this.showHouseCallOnly === doctor.house_call),
                doctor.specialties.some(
                    (specialty) =>
                        specialty.speciality_name === this.selectedCategory
                )
            );
            if (
                doctor.doctor.experience >= this.experienceRange[0] &&
                doctor.doctor.experience < this.experienceRange[1] &&
                (!this.showHouseCallOnly ||
                    (this.showHouseCallOnly &&
                        this.showHouseCallOnly === doctor.house_call))
            ) {
                if (
                    doctor.specialties.some(
                        (specialty) =>
                            specialty.speciality_name === this.selectedCategory
                    )
                ) {
                    doctors.push(doctor);
                } else if (this.selectedCategory === 'all') {
                    doctors.push(doctor);
                }
            }
        });
        this.displayDoctors = doctors;
        console.log('ddd');
    }

    goToDoctor(doctorId: number) {
        this.router.navigate(['/doctor/profile', doctorId]);
    }
}
