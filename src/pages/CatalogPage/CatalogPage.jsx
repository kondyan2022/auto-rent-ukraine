// import { useEffect, useState } from 'react';
import CarCardList from '../../components/CarCardList/CarCardList';
import { Container } from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNextPageThunk, getIsLastPage } from '../../redux/carsSlice';
import { CatalogSection, LoadMoreButton } from './CatalogPage.styled';
import FilterForm from '../../components/FilterForm/FilterForm';
import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLastPage = useSelector(getIsLastPage);
  const [searchParams] = useSearchParams();

  const handleButtonClick = (event) =>
    dispatch(fetchNextPageThunk({ make: searchParams.get('make') }))
      .unwrap()
      .then(() =>
        event.target.scrollIntoView({
          behavior: 'smooth',
        }),
      );

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
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
