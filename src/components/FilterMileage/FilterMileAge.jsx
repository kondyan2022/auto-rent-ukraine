import { useEffect, useState } from 'react';
import { mileAgeNomalize } from '../../helpers';
import { Label, MileInput } from './FilterMileAge.styled';

const FilterMileAge = ({
  initialValue,
  name,
  startText,
  borderRadius,
  labelText = '',
  onChange,
}) => {
  const [value, setValue] = useState(
    () =>
      `${startText}${
        initialValue ? Number(initialValue).toLocaleString('en') : ''
      }`,
  );

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <Label>
      {labelText}
      <MileInput
        type="text"
        autoComplete="off"
        name={name}
        id={name}
        value={value}
        borderRadius={borderRadius}
        onChange={(event) => {
          setValue(`${startText}${mileAgeNomalize(event.target.value)}`);
        }}
      />
    </Label>
  );
};

export default FilterMileAge;
