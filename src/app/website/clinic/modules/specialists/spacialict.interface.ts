export interface IDoctor {
    description: string;
    slot_date: {
        [key: string]: string[];
    };
    doctor: {
        doctor_id: number;
        fullname: string;
        phone_number: string;
        image: string;
        experience: number;
    };
    qualification: {
        education_name: string;
        year: number;
    }[];
    reviews: {
        phone: string;
        date: Date;
        description: string;
    }[];
    specialties: {
        speciality_id: number;
        speciality_name: string;
    }[];
    house_call: boolean;
}

export interface ISpecialists {
    data: {
        doctors: IDoctor[];
        categories: string[];
    };
    error_message: null | string;
    success: number;
}

export interface IGetDoctor {
    data: {
        doctor: IDoctor;
    };
    error_message: null | string;
    success: number;
}
