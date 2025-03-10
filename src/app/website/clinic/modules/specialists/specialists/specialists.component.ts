import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctor } from 'src/app/website/clinic/modules/specialists/spacialict.interface';
import { SpecialistsService } from '../services/specialists.service';

@Component({
    selector: 'app-specialists',
    templateUrl: './specialists.component.html',
    styleUrls: ['./specialists.component.scss'],
})
export class SpecialistsComponent implements OnInit {
    experiences: string[] = ['0-3 года', '3-5 лет', '5-10 лет', '10+ лет'];

    specialists: IDoctor[] | null = null;
    displayDoctors: IDoctor[] = [];
    categories: { id: number; name: string }[] = [];
    

    showHouseCallOnly: boolean = false;
    selectedCategory: string = 'all';
    experienceRange: [number, number] = [0, Infinity];
    isOpenDayDoctor: { [key: number]: { currentIndex: number, currentView: number, displayedSlots: string[], days: any[] } } = {};
    constructor(
        private readonly specServ: SpecialistsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        
        window.scrollTo(0, 0);
        this.fetchSpecialists();
        this.fetchCategories();
            console.log(this.displayDoctors); // Проверьте, что данные содержат specialty_name
    }

    fetchSpecialists() {
        this.specServ.getSpecialists(this.selectedCategory).subscribe((answer: IDoctor[]) => {
            if (Array.isArray(answer) && answer.length > 0) {
                this.displayDoctors = answer.map(doctor => ({
                    ...doctor,
                    specialties: doctor.specialties || [],
                    reviews: doctor.reviews || [] // Ensure reviews are mapped
                }));
            } else {
                this.displayDoctors = [];
            }
        }, error => {
            console.error('Ошибка при загрузке врачей:', error);
        });
    }
    

    fetchCategories() {
        this.specServ.getCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }

    get getDisplayDoctors() {
        return this.displayDoctors;
    }

    onCategoryChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedCategory = selectElement.value;
        this.fetchSpecialists();
    }

    filterDoctorsByExperience(event: Event): void {
        const selectedExperience = (event.target as HTMLSelectElement).value;
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
        this.applyFilters();
    }

    toggleHouseCallDoctors() {
        this.showHouseCallOnly = !this.showHouseCallOnly;
        this.applyFilters();
    }

    applyFilters() {
        let doctors: IDoctor[] = [];
        if (this.specialists) { // Проверка на null
            this.specialists.forEach((doctor: IDoctor) => {
                    if (
                        this.selectedCategory === 'all' ||
                        doctor.specialties.some(specialty => specialty.specialty_name === this.selectedCategory)
                    ) {
                        doctors.push(doctor);
                    }
            });
        }
        console.log('Отфильтрованные специалисты:', doctors); // Логирование
        this.displayDoctors = [...doctors]; // Создаем новый массив
        console.log('Финальный список специалистов:', this.displayDoctors); // Логирование
    }

    goToDoctor(doctorId: number) {
        this.router.navigate(['/specialists/profile', doctorId]);
    }
}
