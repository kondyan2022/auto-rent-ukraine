import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>{' '}
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
