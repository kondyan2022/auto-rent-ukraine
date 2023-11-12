import styled from '@emotion/styled';
import hero from '../../img/hero.jpg';
import { Container } from '../../components/Container/Container';

export const HeroSection = styled.section`
  padding-top: 150px;
  padding-bottom: 50px;
  width: 100%;
  max-width: 1440px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-size: 1440px 600px;
  background-image: url(${() => hero});
`;

export const HeroContainer = styled(Container)`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Header = styled.h1`
  color: var(--color-white);
  max-width: 800px;
  font-size: 58px;
  line-height: 1.2;
  font-weight: 600;

  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const AboutSection = styled.section`
  padding-top: 20px;
  padding-bottom: 50px;
  h2 {
    margin: 20px auto;
    text-align: center;
    color: var(--color-accent-blue);
    font-family: Montserrat;
    font-weight: 600;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 50px;
    li {
      color: var(--color-black);
      font-family: Montserrat;
      width: calc(100% - 100px);
    }
  }
`;
