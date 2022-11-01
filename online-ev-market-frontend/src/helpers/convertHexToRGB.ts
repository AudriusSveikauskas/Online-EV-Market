const convertHexToRGB = (hex: string) => {
  let r = '';
  let g = '';
  let b = '';

  if (hex.length === 4) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;
  }

  if (hex.length === 7) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }

  return [`${+r}`, `${+g}`, `${+b}`];
};

export default convertHexToRGB;
