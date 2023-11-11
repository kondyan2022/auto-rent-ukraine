const mileAgeNomalize = (value) => {
  const input = value.replace(/[^\d]/g, '');
  if (!input || input === '0') {
    return '';
  }
  return Number(input).toLocaleString('en');
};
export default mileAgeNomalize;
