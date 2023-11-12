import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard';
import { CarList } from './CarCardList.styled';

import {
  getCarItems,
  getPageLimit,
  getPageNumber,
  getServerPaginationState,
  setIsLastPage,
} from '../../redux/carsSlice';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getNumberFromString } from '../../helpers';
import CarCardListEmpty from './CarCardListEmpty';

const CarCardList = () => {
  const cars = useSelector(getCarItems);
  const serverPagination = useSelector(getServerPaginationState);
  const currentPage = useSelector(getPageNumber);
  const limit = useSelector(getPageLimit);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const filteredCars = ({ cars, serverPagination, searchParams }) => {
    if (serverPagination) {
      return cars;
    }
    let carlist = [...cars];
    const price = Number(searchParams.get('price'));

    if (price) {
      carlist = carlist
        .filter(({ rentalPrice }) => getNumberFromString(rentalPrice) <= price)
        .sort(
          ({ rentalPrice: a }, { rentalPrice: b }) =>
            getNumberFromString(b) - getNumberFromString(a),
        );
    }
    const milefrom = Number(searchParams.get('milefrom'));
    if (milefrom) {
      carlist = carlist.filter(({ mileage }) => mileage >= milefrom);
    }
    const mileto = Number(searchParams.get('mileto'));
    if (mileto) {
      carlist = carlist.filter(({ mileage }) => mileage <= mileto);
    }
    return carlist;
  };

  const paginateCars = ({ cars, serverPagination, currentPage, limit }) => {
    if (serverPagination) {
      return cars;
    }
    let carlist = cars.slice(0, (currentPage + 1) * limit);
    return carlist;
  };
  //Тут фільтруємо
  const carlist = useMemo(
    () =>
      filteredCars({
        cars,
        serverPagination,
        searchParams,
      }),
    [cars, serverPagination, searchParams],
  );
  //Тут слайс для пагинації
  const paginateCarlist = useMemo(
    () =>
      paginateCars({
        cars: carlist,
        serverPagination,
        currentPage,
        limit,
      }),
    [serverPagination, currentPage, limit, carlist],
  );

  useEffect(() => {
    if (serverPagination) {
      return;
    }
    if ((currentPage + 1) * limit >= carlist.length) {
      dispatch(setIsLastPage(true));
    }
  }, [currentPage, limit, carlist, dispatch, serverPagination]);

  return paginateCarlist.length > 0 ? (
    <CarList>
      {paginateCarlist.map((element) => (
        <li key={element.id}>
          <CarCard carItem={element} />
        </li>
      ))}
    </CarList>
  ) : (
    <CarCardListEmpty />
  );
};

export default CarCardList;
