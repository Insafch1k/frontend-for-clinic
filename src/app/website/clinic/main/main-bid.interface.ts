export interface IBid {
    last_name: string;
    first_name: string;
    birth_date: string;
    phone_number: string;
    speciality: string;
}

export interface IAppointment {
    fio: string;
    day_id: number;
    time: string;
    mobile: string;
}

export interface IConfirmCode {
    code: string;
    mobile: string;
}

export interface IAvailableTime {
    date: string;
    day_id: number;
    filial: string;
    filial_id: number;
    time: { [key: string]: string };
}

export interface IDoctor {
    full_name: string;
    id: number;
    id_easyclinic: number;
    available_times?: IAvailableTime[];
}

export interface IService {
    id: number;
    name: string;
    price: number;
}
