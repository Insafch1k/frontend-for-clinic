import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormGroup,
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'app-push-code',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './push-code.component.html',
    styleUrls: ['./push-code.component.scss'],
})
export class PushCodeComponent {
    inputValue: string = '';

    onInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.inputValue = input.value;
    }
}
