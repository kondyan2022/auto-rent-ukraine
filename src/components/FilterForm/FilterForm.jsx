import { Filter } from '../Filter/Filter';
import FilterMileAge from '../FilterMileage/FilterMileAge';
import carbrands from '../../../res/carbrand.json';
import priceList from '../../helpers/priceList';
import { Button, MileRangeWrapper, MainForm } from './FilterForm.styled';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCarsThunk,
  fetchNextPageThunk,
  getErrorText,
  reset,
} from '../../redux/carsSlice';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const FilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  const error = useSelector(getErrorText);

  useEffect(() => {
    if (error) {
      toast.error(error || 'Unknown error');
    }
  }, [error]);

  useEffect(() => {
    if (firstRender.current) {
      const params = {};
      for (let [key, value] of searchParams.entries()) {
        params[key] = value;
      }
      if (['milefrom', 'mileto', 'price'].some((elem) => elem in params)) {
        dispatch(fetchAllCarsThunk({ make: params.make }));
      } else {
        dispatch(fetchNextPageThunk({ make: params.make }));
      }
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
    setSearchParams(params);

    if (['milefrom', 'mileto', 'price'].some((elem) => elem in params)) {
      //пегінація на фронті
      dispatch(fetchAllCarsThunk({ make: params.make }));
    } else {
      //пагінація на бекенді
      dispatch(reset());
      dispatch(fetchNextPageThunk({ make: params.make }));
    }
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
        labelText={'Price/ 1 hour'}
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
