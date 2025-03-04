import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';
import { IDoctor } from './doctor.interface';

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
export class OurSpecialistsComponent implements OnInit {
    specialists: ISpecialist[] = [];
    visibleSpecialists: ISpecialist[] = [];
    currentStartIndex = 0;
    itemsToShow = 6;

    @ViewChild('specList') specList!: ElementRef;

    constructor(private doctorsService: DoctorsService) {}

    ngOnInit() {
        this.fetchDoctors();
    }

    fetchDoctors() {
        this.doctorsService.getDoctors().subscribe((response) => {
            this.specialists = response.doctors.map(doctor => ({
                fio: doctor.full_name,
                speciality: doctor.specialties.join(', '),
                url: doctor.photo || ''
            }));
            this.updateVisibleSpecialists();
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateItemsToShow();
            this.updateVisibleSpecialists();
        });
    }

    updateItemsToShow() {
        const element = this.specList.nativeElement;
        if (element) {
            const width = element.offsetWidth;
            this.itemsToShow = Math.floor(width / 244);
            this.updateVisibleSpecialists();
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateItemsToShow();
    }

    updateVisibleSpecialists() {
        this.visibleSpecialists = this.specialists.slice(
            this.currentStartIndex,
            this.currentStartIndex + this.itemsToShow
        );

        if (this.visibleSpecialists.length < this.itemsToShow) {
            const remaining = this.itemsToShow - this.visibleSpecialists.length;
            const wrapAround = this.specialists.slice(0, remaining);
            this.visibleSpecialists = this.visibleSpecialists.concat(wrapAround);
        }
    }

    next() {
        this.currentStartIndex = (this.currentStartIndex + 1) % this.specialists.length;
        this.updateVisibleSpecialists();
    }

    prev() {
        this.currentStartIndex = (this.currentStartIndex - 1 + this.specialists.length) % this.specialists.length;
        this.updateVisibleSpecialists();
    }
}
