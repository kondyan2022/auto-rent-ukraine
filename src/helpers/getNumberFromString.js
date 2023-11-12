const getNumberFromString = (str) => {
  return str ? Number(str.replace(/[^\d]/g, '')) : 0;
};

export default getNumberFromString;
