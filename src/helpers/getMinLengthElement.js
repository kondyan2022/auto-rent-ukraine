const getMinLengthElement = (array) => {
  return array.reduce((acc, elem) => (acc.length > elem.length ? elem : acc));
};

export default getMinLengthElement;
