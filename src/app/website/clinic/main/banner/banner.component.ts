import { Component } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
    isOpenAppointment: boolean = false;

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    //Метод для выбора временного слота
    openAppointment(): void {
        this.isOpenAppointment = !this.isOpenAppointment;
    }
}
