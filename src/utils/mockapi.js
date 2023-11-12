import axios from 'axios';

axios.defaults.baseURL = 'https://654bea665b38a59f28efe5bf.mockapi.io/advert/';

export const getCarItems = async (params) => {
  const { data } = await axios.get('/advert', { params });
  return data;
};

export const getCarById = async (id) => {
  const params = { id };
  const { data } = await axios.get(`/advert/`, { params });
  return { data: data[0], id }; // якщо масив пустий, то потрібен ID
};
