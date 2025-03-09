export interface Education {
  name: string;
  year: number;
}

export interface Doctor {
  id: number;
  id_easyclinic: number;
  name: string;
  photo: string | null;
  experiance: number | null;
  phone: string | null;
  educations: Education[];
  specialties: string[];
  selected?: boolean;
  in_clinic:boolean;
}
