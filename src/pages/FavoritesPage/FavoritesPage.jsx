import { useInView } from 'react-intersection-observer';
import CarCardFavoriteList from '../../components/CarCardFavoriteList/CarCardFavoriteList';
import { Container } from '../../components/Container/Container';
import { FavoritesSection, HiddenTitle } from './FavoritesPage.styled';
import ToTop from '../../components/ToTop/ToTop';

const FavoritiesPage = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: '300px',
  });

  return (
    <FavoritesSection>
      <Container>
        <div ref={ref}></div>
        <HiddenTitle>Auto Rent Ukraine My Favorites</HiddenTitle>
        <CarCardFavoriteList />
        {!inView && <ToTop />}
      </Container>
    </FavoritesSection>
  );
};

export default FavoritiesPage;
