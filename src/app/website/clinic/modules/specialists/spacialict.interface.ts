export interface IDoctor {
    available_times: IAvailableTime[];
    experiance: number | null;
    full_name: string;
    id: number;
    id_easyclinic: number;
    photo: string | null;
    price: number | null;

    specialties: {
        doctor_id: number;
        speciality_name: string;
    }[];
    education: {
        name: string;
        year: string;
    }[];

    house_call: boolean;
}

export interface IDoctorFull extends IDoctor {
    reviews: {
        phone: string;
        date: Date;
        description: string;
    }[];
}

export interface ISpecialists {
    data: {
        doctors: IDoctor[];
        categories: string[];
    };
    error_message: null | string;
    success: number;
}

export interface IAvailableTime {
    date: string;
    day_id: number;
    filial: string;
    filial_id: number;
    time: {
        [key: string]: string;
    };
}
