// import cars from '../../../res/advertsCars.json';
import { useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard';
import { CarList } from './CarCardList.styled';

import { getCarItems } from '../../redux/carsSlice';

const CarCardList = () => {
  const cars = useSelector(getCarItems);

  return (
    <CarList>
      {cars.map((element) => (
        <li key={element.id}>
          <CarCard carItem={element} />{' '}
        </li>
      ))}
    </CarList>
  );
};

export default CarCardList;
