import CarModalCard from '../../components/CarModalCard/CarModalCard';
import cardata from '../../../res/advertsCars.json';
const FavoritiesPage = () => {
  return (
    <section>
      FavoritiesPage
      <CarModalCard carItem={cardata[0]} />
    </section>
  );
};

export default FavoritiesPage;
