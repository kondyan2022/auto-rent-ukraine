import { useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard';
import { getFavoriteIndexes } from '../../redux/favoritiesSlice';
import { useEffect, useState } from 'react';
import { getCarItems } from '../../redux/carsSlice';
import { getCarById } from '../../utils/mockapi';
import { CarList } from './CarCardFavoriteList.styled';

const CarCardFavoriteList = () => {
  const favoriteCarIndexes = useSelector(getFavoriteIndexes);
  const carsRes = useSelector(getCarItems);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCarData = async (id) => {
      try {
        const data = await getCarById(id);
        setCars((prev) => [...prev, data]);
      } catch (error) {
        console.log(`favorites: Data for car ${id}: request error! `);
      }
    };

    const carItems = favoriteCarIndexes.reduce((acc, elem) => {
      const foundItem = carsRes.filter((item) => item.id === elem)[0];
      if (foundItem) {
        acc.push(foundItem);
      } else {
        getCarData(elem);
      }
      return acc;
    }, []);

    setCars(carItems);
  }, [favoriteCarIndexes, carsRes]);
  console.log('CARS', cars);
  return (
    <CarList>
      {cars.map((element) => (
        <li key={element.id}>
          <CarCard carItem={element} />
        </li>
      ))}
    </CarList>
  );
};

export default CarCardFavoriteList;
