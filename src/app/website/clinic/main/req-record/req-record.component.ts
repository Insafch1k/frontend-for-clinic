import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BidService } from '../bid.service';
import { IBid } from '../main-bid.interface';

@Component({
    selector: 'app-req-record',
    templateUrl: './req-record.component.html',
    styleUrls: ['./req-record.component.scss'],
})
export class ReqRecordComponent implements OnInit {
    appointmentForm: FormGroup;
    specialties: { id: number; name: string }[] = [];

    constructor(private fb: FormBuilder, private readonly bidServ: BidService) {
        this.appointmentForm = this.fb.group({
            surname: ['', Validators.required],
            name: ['', Validators.required],
            birthDate: ['', [Validators.required, this.dateValidator]],
            phone: ['', [Validators.required, this.phoneValidator]],
            speciality: ['', Validators.required],
            consent: [false, Validators.requiredTrue],
        });
    }

    ngOnInit(): void {
        this.bidServ.getSpecialties().subscribe(
            (data) => {
                this.specialties = data;
            },
            (error) => {
                console.error('Ошибка при загрузке специальностей', error);
            }
        );
    }

    dateValidator(control: any) {
        const date = new Date(control.value);
        return date instanceof Date && !isNaN(date.getTime())
            ? null
            : { invalidDate: true };
    }

    phoneValidator(control: any) {
        const phonePattern = /^(\+7|7|8)?[0-9]{10}$/;
        return phonePattern.test(control.value) ? null : { invalidPhone: true };
    }

    onSubmit() {
        if (this.appointmentForm.valid) {
            const sendData: IBid = {
                last_name: this.appointmentForm.value.surname,
                first_name: this.appointmentForm.value.name,
                birth_date: this.appointmentForm.value.birthDate,
                phone_number: this.appointmentForm.value.phone,
                speciality: this.appointmentForm.value.speciality,
            };
            this.bidServ.sendBid(sendData);
            this.appointmentForm.reset();
        }
    }
}
