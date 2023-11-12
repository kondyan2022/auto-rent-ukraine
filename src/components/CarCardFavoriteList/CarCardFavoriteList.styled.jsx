import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CarList = styled.ul`
  display: flex;
  gap: 50px 29px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const EmtyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    max-width: 300px;
    font-weight: 600;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 12px;
  background-color: var(--color-blue);
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-align: center;
  border: none;
  border-radius: 12px;
  color: var(--color-white);
  background-color: var(--color-blue);
  transition: background-color 300ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--color-accent-blue);
  }
`;
