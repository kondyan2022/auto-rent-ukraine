import styled from '@emotion/styled';

export const ToTopStyled = styled.div`
  position: fixed;
  z-index: 100;
  right: 30px;
  bottom: 30px;

  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    fill: transparent;
    stroke: var(--color-blue);
    transform: rotateX(180deg);
    transition: color 250ms ease-in-out;
    box-shadow: 5px 4px 15px 1px rgba(0, 0, 0, 0.75);

    &:hover {
      stroke: var(--color-accent-blue);
      transform: scale(1.1) rotateX(180deg);
    }
  }
`;
