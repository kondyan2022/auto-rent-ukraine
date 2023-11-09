import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
  font-size: 12px;

  img {
    height: 268px;
    margin-bottom: 14px;
    border-radius: 14px;
    object-fit: cover;
    object-position: center;
    background: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
      ),
      #f3f3f2;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--color-black);
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: var(--color-blue);
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 28px;
`;

export const IconWrapper = styled.svg`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  right: 14px;
  top: 14px;
  width: 18px;
  height: 18px;
  opacity: ${(props) => (props.favorite ? 1 : 0)};
  transition: opacity 500ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
