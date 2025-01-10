import { Component } from '@angular/core';

@Component({
    selector: 'app-superiority',
    templateUrl: './superiority.component.html',
    styleUrls: ['./superiority.component.scss'],
})
export class SuperiorityComponent {
    sectionList: {
        url: string;
        text: string;
    }[] = [
        {
            url: 'bx_clinic',
            text: 'Специалисты высокого уровня',
        },
        {
            url: 'carbon_education',
            text: 'Онлайн медицина',
        },
        {
            url: 'covid_virus-lab-research-test-tube',
            text: 'Комфортная и доброжелательная обстановка',
        },
        {
            url: 'ic_outline-people-alt',
            text: 'Прием педиатра на дому',
        },
        {
            url: 'ion_home-outline',
            text: 'Современные методы лечения',
        },
        {
            url: 'mdi_school-online',
            text: 'Индивидуальный подход',
        },
    ];
}
