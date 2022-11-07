declare global {
  type CarProps = {
    _id: string;
    battery: number;
    doors: number;
    equipment?: string[];
    exteriorColor?: string;
    interiorColor?: string;
    mileage: number;
    modelId: string;
    photo1: string;
    photo2?: string;
    photo3?: string;
    photo4?: string;
    photo5?: string;
    power: number;
    price: number;
    registration: number;
    seats?: number;
    upholstery?: string;
    userId: string;
  };
}

export {};
