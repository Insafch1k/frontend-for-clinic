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
    showSuccessMessage: boolean = false;

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
            (error: any) => {
                console.error('Ошибка при загрузке специальностей', error);
            }
        );
    }

    dateValidator(control: any) {
        const value = control.value;
        if (!value) {
            return null; // Разрешаем пустое значение, если поле не обязательное
        }

        // Регулярное выражение для проверки формата "ДД.ММ.ГГГГ"
        const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
        const match = datePattern.exec(value);

        if (!match) {
            return { invalidDate: true };
        }

        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);

        // Проверка корректности дня, месяца и года
        if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) {
            return { invalidDate: true };
        }

        // Дополнительная проверка количества дней в месяце
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
            return { invalidDate: true };
        }

        return null; // Дата корректна
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
            this.bidServ.sendBid(sendData).subscribe(
                (response: any) => {
                    this.showSuccessMessage = true; // Показать сообщение об успехе
                    this.appointmentForm.reset();

                    // Скрыть сообщение об успехе через 10 секунд
                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 10000);
                },
                (error: any) => {
                    console.error('Ошибка при отправке заявки', error);
                }
            );
        }
    }
}
