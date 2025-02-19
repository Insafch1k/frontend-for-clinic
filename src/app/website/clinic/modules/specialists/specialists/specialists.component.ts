import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    IDoctor,
    ISpecialists,
} from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { SpecialistsService } from '../services/specialists.service';

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

    selectedCategory: string = 'all';

    constructor(
        private readonly specServ: SpecialistsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        window.scrollTo(0, 0); // Прокручивает страницу к верхней части
        this.fetchSpecialists();
    }

    fetchSpecialists() {
        this.specServ.getSpecialists().subscribe((answer: ISpecialists) => {
            this.specialists = answer;
            this.displayDoctors = answer.data.doctors; // Инициализация отображаемых врачей
            this.categories = answer.data.categories;

            // this.fillDoctorsTimeSlots();
            console.log(answer);
        });
    }

    get getDisplayDoctors() {
        return this.displayDoctors;
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
                doctor.experiance! >= this.experienceRange[0],
                doctor.experiance! < this.experienceRange[1],
                !this.showHouseCallOnly ||
                    (this.showHouseCallOnly &&
                        this.showHouseCallOnly === doctor.house_call),
                doctor.specialties.some(
                    (specialty) =>
                        specialty.speciality_name === this.selectedCategory
                )
            );
            if (
                doctor.experiance! >= this.experienceRange[0] &&
                doctor.experiance! < this.experienceRange[1] &&
                (!this.showHouseCallOnly ||
                    (this.showHouseCallOnly &&
                        this.showHouseCallOnly === doctor.house_call))
            ) {
                if (
                    doctor.specialties.some(
                        (specialty) =>
                            specialty.speciality_name === this.selectedCategory
                    ) ||
                    this.selectedCategory === 'all'
                ) {
                    doctors.push(doctor);
                }
                console.log(doctors);
            }
        });
        this.displayDoctors = doctors;
        console.log(this.selectedCategory);
    }

    goToDoctor(doctorId: number) {
        this.router.navigate(['/specialists/profile', doctorId]);
    }
}
