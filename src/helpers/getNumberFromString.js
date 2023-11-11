const getNumberFromString = (str) => {
  console.log({ number: Number(str.replace(/[^\d]/g, '')) });

  return str ? Number(str.replace(/[^\d]/g, '')) : 0;
};

export default getNumberFromString;
