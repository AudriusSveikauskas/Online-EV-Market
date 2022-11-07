const stringToNumber = (str: string) => {
  let convertedNumber;

  if (str) {
    convertedNumber = Number(str.trim());
  }

  if (convertedNumber) {
    return convertedNumber;
  }

  return -1;
};

export default stringToNumber;
