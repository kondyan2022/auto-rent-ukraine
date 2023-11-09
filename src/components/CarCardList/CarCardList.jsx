import cars from '../../../res/advertsCars.json';
import CarCard from '../CarCard/CarCard';

const CarCardList = () => {
  return (
    <ul>
      {cars.map((element) => (
        <li key={element.id}>
          <CarCard {...element} />{' '}
        </li>
      ))}
    </ul>
  );
};

export default CarCardList;
