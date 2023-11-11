import { Filter } from '../Filter/Filter';
import FilterMileAge from '../FilterMileage/FilterMileAge';
import carbrands from '../../../res/carbrand.json';
import priceList from '../../helpers/priceList';
import { Button, MileRangeWrapper, MainForm } from './FilterForm.styled';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchNextPageThunk, reset } from '../../redux/carsSlice';
import { useEffect, useRef } from 'react';

const FilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(fetchNextPageThunk({ make: searchParams.get('make') }));
      firstRender.current = false;
    }
    return () => dispatch(reset());
  }, [dispatch, searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {};
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      if (key !== 'make') {
        value = value.replace(/[^\d]/g, '');
      } else {
        value = value === 'Enter the text' ? '0' : value;
      }
      if (value && value !== '0') {
        params[key] = value;
      }
    }
    console.log(params);
    setSearchParams(params);
    dispatch(reset());
    dispatch(fetchNextPageThunk({ make: params.make }));
  };

  return (
    <MainForm onSubmit={handleSubmit}>
      <Filter
        name={'make'}
        labelText={'Car brand'}
        initValue={searchParams.get('make') || 'All'}
        dropdownListValues={carbrands}
        allValue="Enter the text"
        width={'224px'}
        listHieght={'272px'}
      />
      <Filter
        name={'price'}
        labelText={'Price/ 1 day'}
        startText={'To '}
        finishText={'$'}
        initValue={
          searchParams.get('price')
            ? searchParams.get('price').replace(/[^\d]/g, '')
            : ''
        }
        dropdownListValues={priceList}
        width={'125px'}
        listHeight={'188px'}
      />
      <MileRangeWrapper>
        <FilterMileAge
          labelText={'Сar mileage / km'}
          name={'milefrom'}
          initialValue={searchParams.get('milefrom')}
          startText={'From '}
          borderRadius={'14px 0 0 14px'}
        />
        <FilterMileAge
          name={'mileto'}
          initialValue={searchParams.get('mileto')}
          startText={'To '}
          borderRadius={'0 14px 14px 0'}
        />
      </MileRangeWrapper>
      <Button type="submit">Search</Button>
    </MainForm>
  );
};

export default FilterForm;
