import styled from '@emotion/styled';

export const CustomSelect = styled.div`
  position: relative;
`;

export const TextInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: 48px;
  border: none;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: var(--color-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  transition: color 250ms ease-in-out;
  &:focus {
    outline: none;
    color: var(--color-blue);
  }
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  bottom: 14px;
  left: ${(props) => `calc(${props.width} - 38px)`};
  width: 20px;
  height: 20px;
  stroke: var(--color-black);
  fill: transparent;
  transform: rotateX(${(props) => (props.listOpen ? '-180deg' : '0')});
  transition:
    transform 250ms ease-in-out,
    stroke 250ms ease-in-out;
  &:hover {
    stroke: var(--color-blue);
  }
`;

export const ItemListWrapper = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.listHeight};
  z-index: 20;
  top: calc(100% + 4px);
  padding: 14px 8px 14px 18px;
  border-radius: 14px;
  border: 1px solid #1214170c;
  background-color: #fff;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: ${(props) => `calc(${props.listHeight} - 28px)`};
  overflow-y: auto;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(18, 20, 23, 0.05);
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ListItemText = styled.p`
  color: ${(props) => (props.active ? 'var(--color-black)' : '#12141733')};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  transition: color 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--color-blue);
  }
`;
