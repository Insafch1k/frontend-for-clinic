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
            text: 'd',
        },
        {
            url: 'carbon_education',
            text: '',
        },
        {
            url: 'covid_virus-lab-research-test-tube',
            text: '',
        },
        {
            url: 'ic_outline-people-alt',
            text: '',
        },
        {
            url: 'ion_home-outline',
            text: '',
        },
        {
            url: 'mdi_school-online',
            text: '',
        },
    ];
}
