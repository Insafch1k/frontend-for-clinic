import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-req-record',
    templateUrl: './req-record.component.html',
    styleUrls: ['./req-record.component.scss'],
})
export class ReqRecordComponent implements OnInit {
    appointmentForm: FormGroup;
    doctors: string[] = [
        'Гастроэнтеролог',
        'Кардиолог',
        'Терапевт',
        'Офтальмолог',
    ];

    constructor(private fb: FormBuilder) {
        this.appointmentForm = this.fb.group({
            surname: ['', Validators.required],
            name: ['', Validators.required],
            birthDate: ['', [Validators.required, this.dateValidator]],
            phone: ['', [Validators.required, this.phoneValidator]],
            doctor: ['', Validators.required],
            consent: [false, Validators.requiredTrue],
        });
    }

    ngOnInit(): void {}

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
            console.log(this.appointmentForm.value);
            this.appointmentForm.reset();
        }
    }
}
