import styled from '@emotion/styled';

export const ConditionList = styled.ul`
  height: 72px;
  /* overflow: hidden; */
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  span {
    color: var(--color-blue);
    font-weight: 600;
  }
`;

export const ConditionItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  font-family: ${(props) => (props.double ? 'Montserrat' : 'Manrope')};
  letter-spacing: ${(props) => (props.double ? '-0.24px' : '0')};
`;
