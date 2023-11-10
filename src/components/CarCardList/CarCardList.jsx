import cars from '../../../res/advertsCars.json';
import CarCard from '../CarCard/CarCard';
import { CarList } from './CarCardList.styled';

const CarCardList = () => {
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
