import { Container } from '../../components/Container/Container';
import {
  HeroSection,
  Header,
  HeroContainer,
  AboutSection,
} from './AboutPage.styled';

const AboutPage = () => {
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <Header>
            Connecting people to the best car options around the world.
          </Header>
        </HeroContainer>
      </HeroSection>
      <AboutSection>
        <Container>
          <h2>Best Price and Best Experience</h2>
          <ul>
            <li>
              We are the largest online car rental platform in the Ukraine and
              one of the leaders in the segment. We breathe excellence in
              customer service and work focused on ensuring satisfaction from
              the beginning to the end of your trip.
            </li>
            <li>
              At Auto Rent Ukraine, you can compare prices and car rental
              options from hundreds of rental companies and book the best option
              for you. Founded in 2019, our mission is to offer the best car
              rental options in the world.
            </li>
            <li>
              Auto Rent Ukraine guarantees the best price for its customers and
              excellence in customer service.
            </li>
          </ul>
        </Container>
      </AboutSection>
    </>
  );
};

export default AboutPage;
