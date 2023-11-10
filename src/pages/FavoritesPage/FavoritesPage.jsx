import CarCardFavoriteList from '../../components/CarCardFavoriteList/CarCardFavoriteList';
import { Container } from '../../components/Container/Container';
import { FavoritesSection } from './FavoritesPage.styled';
const FavoritiesPage = () => {
  return (
    <FavoritesSection>
      <Container>
        <CarCardFavoriteList />
      </Container>
    </FavoritesSection>
  );
};

export default FavoritiesPage;
