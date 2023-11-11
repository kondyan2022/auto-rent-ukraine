// import { useEffect, useState } from 'react';
import CarCardList from '../../components/CarCardList/CarCardList';
import { Container } from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNextPageThunk,
  getIsLastPage,
  getServerPaginationState,
  nextPage,
} from '../../redux/carsSlice';
import { CatalogSection, LoadMoreButton } from './CatalogPage.styled';
import FilterForm from '../../components/FilterForm/FilterForm';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLastPage = useSelector(getIsLastPage);
  const [searchParams] = useSearchParams();
  const serverPagination = useSelector(getServerPaginationState);
  const refAnchor = useRef(null);

  const handleButtonClick = () => {
    if (serverPagination) {
      dispatch(fetchNextPageThunk({ make: searchParams.get('make') }))
        .unwrap()
        .then(() =>
          //по event.target не скроліт останню сторінку т.к на ній кнопка відсутня
          refAnchor.current.scrollIntoView({
            behavior: 'smooth',
          }),
        );
    } else {
      dispatch(nextPage());
      //Маленький костиль, хоча можно через useEffect
      setTimeout(
        () =>
          refAnchor.current.scrollIntoView({
            behavior: 'smooth',
          }),
        400,
      );
    }
  };

  return (
    <CatalogSection>
      <Container>
        <FilterForm />
        <CarCardList />
        {!isLastPage && (
          <LoadMoreButton type="button" onClick={handleButtonClick}>
            Load more
          </LoadMoreButton>
        )}
        <div ref={refAnchor}></div>
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
