import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../Container/Container';

export const HeaderSection = styled.header`
  /* position: fixed; */
  z-index: 8;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #e7e9fc;
  background-color: var(--color-white);
  box-shadow:
    0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: transform 250ms ease-in-out;
  & > a:hover,
  & > a:focus {
    transform: scale(1.1);
  }
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  color: var(--color-blue);
  /* White text color */
  font-family: Montserrat;
  font-weight: 600;
  transition:
    color 250ms ease-in-out,
    transform 250ms ease-in-out;
  &.active {
    color: var(--color-accent-blue);
    text-decoration: underline;
    transform: scale(1.1);
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: var(--color-accent-blue);
  }
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
