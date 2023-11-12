import styled from '@emotion/styled';

export const CarModalContainer = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  color: var(--color-black);
  background-color: var(--color-white);
  img {
    margin-bottom: 14px;
    width: 461px;
    height: 248px;
    border-radius: 14px;
    border-radius: 14px;
    object-fit: cover;
    object-position: center;

    background: #f3f3f2;
  }
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: var(--color-blue);
    }
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.5;
`;

export const DescriptionText = styled.p`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  height: 60px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.42;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const AccessoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 62px;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 1.5;
`;

export const CloseIconWrapper = styled.svg`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  stroke: var(--color-black);
  transition: all 500ms ease-in-out;
  &:hover {
    stroke: var(--color-accent-blue);
    transform: scale(1.1);
  }
`;

export const RentalButton = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border-radius: 12px;
  color: var(--color-white);
  background-color: var(--color-blue);
  transition: background-color 300ms ease-in-out;
  &:hover,
  &:focus {
    background-color: var(--color-accent-blue);
  }
`;
