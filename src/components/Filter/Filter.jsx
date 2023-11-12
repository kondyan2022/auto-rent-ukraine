// import { useSearchParams } from 'react-router-dom';
// import carbrands from '../../../res/carbrand.json';
import { useEffect, useState } from 'react';
import {
  ArrowIcon,
  CustomSelect,
  ItemList,
  ItemListWrapper,
  Label,
  ListItemText,
  TextInput,
} from './Filter.styled';
import sprite from '../../img/sprite.svg';

export const Filter = ({
  labelText,
  startText = '',
  finishText = '',
  initValue,
  onChange,
  dropdownListValues,
  allValue = '',
  name = '',
  width = '224px',
  listHeight = '272px',
}) => {
  const [filterValue, setFilterValue] = useState(() =>
    initValue === '' ? 'All' : initValue,
  );
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(filterValue);
    }
  }, [filterValue, onChange]);

  return (
    <CustomSelect>
      <Label>
        {labelText}
        <TextInput
          readOnly
          autoComplete="off"
          type="text"
          name={name}
          id={name}
          value={`${startText}${
            filterValue === 'All' ? allValue : filterValue
          }${finishText}`}
          width={width}
          onClick={() => {
            setIsListOpen((prev) => !prev);
          }}
        />
        <ArrowIcon listOpen={isListOpen} width={width}>
          <use href={`${sprite}#icon-chevron-down`}></use>
        </ArrowIcon>
      </Label>
      {isListOpen && (
        <ItemListWrapper width={width} listHeight={listHeight}>
          <ItemList listHeight={listHeight}>
            {['All', ...dropdownListValues].map((item) => (
              <li
                key={item}
                onClick={(e) => {
                  const text = e.target.textContent;
                  setIsListOpen(false);
                  setFilterValue(text);
                }}
              >
                <ListItemText
                  active={
                    filterValue === allValue || filterValue === ''
                      ? 'All'
                      : filterValue === `${item}`
                  }
                >
                  {item}
                </ListItemText>
              </li>
            ))}
          </ItemList>
        </ItemListWrapper>
      )}
    </CustomSelect>
  );
};
