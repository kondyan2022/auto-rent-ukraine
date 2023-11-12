import { EmtyWrapper, StyledLink } from './CarCardFavoriteList.styled';

const CarCardFavoriteListEmpty = () => {
  return (
    <EmtyWrapper>
      <p>
        OOPS... We are very sorry! You don’t have any car at your favorites.
      </p>
      <StyledLink to={'/catalog'}>Search car</StyledLink>
    </EmtyWrapper>
  );
};

export default CarCardFavoriteListEmpty;
