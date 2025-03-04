export interface IStock {
    id: number;
    name: string;
    actions: {
      id: number;
      description: string;
      photo: string;
    }[];
  }
  