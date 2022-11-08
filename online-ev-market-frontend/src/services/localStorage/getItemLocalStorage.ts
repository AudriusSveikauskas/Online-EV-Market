const getItemLocalStorage = (keyName: string, id?: string) => {
  const cars = localStorage.getItem(keyName);

  if (cars !== null) {
    const carsArr = JSON.parse(cars);
    if (id === undefined) {
      return carsArr;
    }
    for (let i = 0; i < carsArr.length; i += 1) {
      if (carsArr[i]._id === id) {
        return true;
      }
    }
    return false;
  }
  return [];
};

export default getItemLocalStorage;
