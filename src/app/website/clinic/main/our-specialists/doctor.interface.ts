export interface IDoctor {
    full_name: string;
    id: number;
    id_easyclinic: number;
    photo: string | null;
    specialties: string[];
}

export interface IDoctorsResponse {
    doctors: IDoctor[];
}
