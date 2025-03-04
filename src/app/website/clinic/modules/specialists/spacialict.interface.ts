export interface IDoctor {
    available_times: IAvailableTime[];
    experiance: number | null;
    full_name: string;
    id: number;
    id_easyclinic: number;
    phone_number: string;
    photo: string | null;
    price?: number | null;
    specialties: {
        doctor_id: number;
        specialty_name: string;
    }[];
    filials: {
        doctor_id: number;
        filial_name: string;
    }[];
    education?: {
        name: string;
        year: string;
    }[]; // Добавьте это свойство, если оно необходимо
}
export interface IAvailableTime {
    date: string;
    day_id: number;
    filial: string;
    filial_id: number;
    time: { [key: string]: string }; // Слоты времени
  }
  export interface IDoctorFull extends IDoctor {
    reviews: {
        content: string; // Текст отзыва
        patient_info: string; // Информация о пациенте
        time: string; // Время отзыва
    }[];
}