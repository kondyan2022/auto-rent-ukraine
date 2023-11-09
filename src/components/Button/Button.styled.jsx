import styled from '@emotion/styled';

export const Button = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: Manrope;
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
