import styled from '@emotion/styled';

export const MileInput = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  background-color: var(--color-background-input);
  border: none;
  transition: color 250ms ease-in-out;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
  border-right: ${(props) =>
    props.borderRadius
      ? props.borderRadius[0] !== '0'
        ? '1px solid rgba(138, 138, 137, 0.20)'
        : 'none'
      : 'none'};
  &:focus {
    outline: none;
    color: var(--color-blue);
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
`;
