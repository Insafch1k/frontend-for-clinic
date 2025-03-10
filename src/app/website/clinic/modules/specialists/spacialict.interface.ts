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
    }[];
    reviews?: {
        content: string;
        patient_name_and_phone: string;
        time: string;
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
    reviews?: {
        content: string;
        patient_name_and_phone: string;
        time: string;
    }[];
}


export interface IDoctorProfile {
    available_times: IAvailableTime[];
    experiance: number | null;
    full_name: string;
    id: number;
    id_easyclinic: number;
    phone_number: string;
    photo: string | null;
    price?: number | null;
    specialties: {
        id: number;
        name: string;
    }[];
    filials: {
        doctor_id: number;
        filial_name: string;
    }[];
    education?: {
        name: string;
        year: string;
    }[];
}

export interface IDoctorProfileFull extends IDoctorProfile {
    reviews: {
        content: string;
        patient_name_and_phone: string;
        time: string;
    }[];
}