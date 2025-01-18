import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

interface ISpecialist {
    fio: string;
    speciality: string;
    url: string;
}

@Component({
    selector: 'app-our-specialists',
    templateUrl: './our-specialists.component.html',
    styleUrls: ['./our-specialists.component.scss'],
})
export class OurSpecialistsComponent {
    specialists: ISpecialist[] = [
        {
            fio: 'Имя Отчество Фамилия 1',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 2',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 3',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 4',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 5',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 6',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 7',
            speciality: 'Должность сотрудника',
            url: '',
        },
        {
            fio: 'Имя Отчество Фамилия 8',
            speciality: 'Должность сотрудника',
            url: '',
        },
    ];

    visibleSpecialists: ISpecialist[] = [];
    currentStartIndex = 0;
    itemsToShow = 6; // количество элементов, которые нужно показывать

    @ViewChild('specList') specList!: ElementRef;

    ngOnInit() {
        // Инициализация данных, но не вызовем updateItemsToShow здесь
        this.updateVisibleSpecialists();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateItemsToShow();
            this.updateVisibleSpecialists();
        });
    }

    // Метод для обновления количества элементов для показа
    updateItemsToShow() {
        const element = this.specList.nativeElement;
        if (element) {
            const width = element.offsetWidth;
            this.itemsToShow = Math.floor(width / 244);
            // При необходимости обновляем массив видимых специалистов
            this.updateVisibleSpecialists();
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateItemsToShow();
    }

    updateVisibleSpecialists() {
        // Получаем видимые специалисты
        this.visibleSpecialists = this.specialists.slice(
            this.currentStartIndex,
            this.currentStartIndex + this.itemsToShow
        );

        // Если текущее количество специалистов меньше, чем itemsToShow, добавляем циклический переход
        if (this.visibleSpecialists.length < this.itemsToShow) {
            const remaining = this.itemsToShow - this.visibleSpecialists.length;
            const wrapAround = this.specialists.slice(0, remaining);
            this.visibleSpecialists =
                this.visibleSpecialists.concat(wrapAround);
        }
    }

    next() {
        // Циклический переход вправо по одному специалисту
        this.currentStartIndex =
            (this.currentStartIndex + 1) % this.specialists.length;
        this.updateVisibleSpecialists();
        console.log(this.currentStartIndex, this.visibleSpecialists);
    }

    prev() {
        // Циклический переход влево по одному специалисту
        this.currentStartIndex =
            (this.currentStartIndex - 1 + this.specialists.length) %
            this.specialists.length;
        this.updateVisibleSpecialists();
        console.log(this.currentStartIndex, this.visibleSpecialists);
    }
}
