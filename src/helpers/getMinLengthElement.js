const getMinLengthElement = (array) => {
  return array.reduce((acc, elem) =>
    acc.length > elem.length ? (acc = elem) : acc,
  );
};

export default getMinLengthElement;
