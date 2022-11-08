import getItemLocalStorage from '@/services/localStorage/getItemLocalStorage';

export type CarProps = {
  _id: string;
  carName: string;
  price: number;
  photo: string;
};

const setItemLocalStorage = (keyName: string, keyValue: CarProps) => {
  const { _id: carId } = keyValue;
  const cars = getItemLocalStorage('cars');

  if (cars.length === 0) {
    return localStorage.setItem(keyName, JSON.stringify([keyValue]));
  }

  for (let i = 0; i < cars.length; i += 1) {
    if (cars[i]._id === carId) {
      const newCars = cars.filter((car: CarProps) => car._id !== carId);
      return localStorage.setItem(keyName, JSON.stringify(newCars));
    }
  }

  const newCars = [keyValue, ...cars];
  return localStorage.setItem(keyName, JSON.stringify(newCars));
};

export default setItemLocalStorage;
