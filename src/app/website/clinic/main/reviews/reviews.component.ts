import { Component } from '@angular/core';
import { IReview } from './reviews.interface';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
    reviews: IReview[] = [
        {
            contact: 9123456789,
            date: new Date('2023-04-15T10:30:00'),
            rating: 5,
            history:
                'У меня была тяжелая форма аллергии, которая мучила меня несколько лет. Я пробовал множество лекарств, но ничего не помогало.',
            review: 'Клиника произвела на меня отличное впечатление. Врачи очень внимательные и компетентные. После назначения лечения я почувствовал значительное облегчение уже через неделю.',
            dateAdmission: new Date('2023-04-20T14:00:00'),
        },
        {
            contact: 9198765432,
            date: new Date('2023-05-10T11:15:00'),
            rating: 4,
            history:
                'Недавно мне сделали операцию на колене после спортивной травмы. Я долго восстанавливался и хотел разобраться с этим в специализированной клинике.',
            review: 'Клиника очень современная, оборудование на высшем уровне. Несмотря на то что я переживал перед операцией, врачи поддерживали меня и объясняли каждый шаг.',
            dateAdmission: new Date('2023-05-15T09:45:00'),
        },
        {
            contact: 9012345678,
            date: new Date('2023-06-22T13:00:00'),
            rating: 3,
            history:
                'У меня была хроническая боль в спине, которая начала беспокоить меня после долгого сидячего рабочего дня. Решил обратиться в клинику.',
            review: 'Клиника хорошая, но мне показалось, что время, отведенное на консультацию, было недостаточным. Врач быстро выписал мне лечение, а я хотел бы больше обсуждать свою проблему.',
            dateAdmission: new Date('2023-06-25T16:30:00'),
        },
        {
            contact: 9876543210,
            date: new Date('2023-07-30T08:45:00'),
            rating: 5,
            history:
                'Я страдал от постоянного беспокойства и стресса. После нескольких неудачных попыток самостоятельно справиться с этим, решил обратиться за помощью к специалистам.',
            review: 'Я был приятно удивлен качеством обслуживания и профессионализмом врачей. После курса терапии я стал чувствовать себя гораздо лучше, и мой психолог отметил значительные изменения.',
            dateAdmission: new Date('2023-08-02T10:00:00'),
        },
    ];
}