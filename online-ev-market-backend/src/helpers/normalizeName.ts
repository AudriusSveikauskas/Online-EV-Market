const normalizeName = (name: string) => {
  const preparedName = name.trim().replaceAll(' ', '').toLowerCase();

  return preparedName.charAt(0).toUpperCase() + preparedName.slice(1);
};

export default normalizeName;
