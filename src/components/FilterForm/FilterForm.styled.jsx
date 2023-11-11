import styled from '@emotion/styled';

export const MainForm = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
export const MileRangeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Button = styled.button`
  padding: 14px 44px;
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
