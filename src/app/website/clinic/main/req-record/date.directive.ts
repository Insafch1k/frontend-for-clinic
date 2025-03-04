import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDateFormat]'
})
export class DateFormatDirective {
    constructor(private el: ElementRef) {}

    @HostListener('input', ['$event']) onInputChange(event: Event) {
        const input = this.el.nativeElement;
        let value = input.value.replace(/\D/g, ''); // Удаляем все нечисловые символы

        if (value.length > 2) {
            value = value.substring(0, 2) + '.' + value.substring(2);
        }
        if (value.length > 5) {
            value = value.substring(0, 5) + '.' + value.substring(5, 9);
        }

        input.value = value;
    }
}
