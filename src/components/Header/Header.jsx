import {
  HeaderContainer,
  HeaderSection,
  Navigation,
  StyledImage,
  StyledLink,
} from './Header.styled';
import logo from '../../img/rent-car.png';

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <a href="/auto-rent-ukraine/">
          <StyledImage src={logo} alt="logo" />
        </a>
        <Navigation>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>{' '}
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navigation>
      </HeaderContainer>
    </HeaderSection>
  );
};
