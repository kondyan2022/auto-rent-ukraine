const list = () => {
  const result = [];
  for (let i = 30; i <= 500; i += 10) {
    result.push(i);
  }
  return result;
};

const priceList = list();
export default priceList;
