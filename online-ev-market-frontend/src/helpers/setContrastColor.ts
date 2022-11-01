import convertHexToRGB from '@/helpers/convertHexToRGB';

const setContrastColor = (hex: string) => {
  const regexHexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  if (regexHexPattern.test(hex)) {
    const rgb = convertHexToRGB(hex);

    const contrast =
      Math.round(
        parseInt(rgb[0], 10) * 299 +
          parseInt(rgb[1], 10) * 587 +
          parseInt(rgb[2], 10) * 114,
      ) / 1000;

    return contrast > 228 ? 'dark' : 'light'; // > 128
  }

  return 'primary';
};

export default setContrastColor;
