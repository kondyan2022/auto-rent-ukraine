import CarCardList from '../../components/CarCardList/CarCardList';
import { Container } from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNextPageThunk,
  getErrorText,
  getIsLastPage,
  getServerPaginationState,
  nextPage,
} from '../../redux/carsSlice';
import {
  CatalogSection,
  HiddenTitle,
  LoadMoreButton,
} from './CatalogPage.styled';
import FilterForm from '../../components/FilterForm/FilterForm';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ToTop from '../../components/ToTop/ToTop';
import { useInView } from 'react-intersection-observer';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLastPage = useSelector(getIsLastPage);
  const [searchParams] = useSearchParams();
  const serverPagination = useSelector(getServerPaginationState);
  const refAnchor = useRef(null);
  const error = useSelector(getErrorText);
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: '300px',
  });

  const handleButtonClick = () => {
    if (serverPagination) {
      dispatch(fetchNextPageThunk({ make: searchParams.get('make') }))
        .unwrap()
        .then(() =>
          //по event.target не скроліт останню сторінку т.к на ній кнопка відсутня
          refAnchor.current.scrollIntoView({
            behavior: 'smooth',
          }),
        )
        .catch(() => toast.error(error));
    } else {
      dispatch(nextPage());
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
        <div ref={ref}></div>

        <HiddenTitle>Auto Rent Ukraine Catalog</HiddenTitle>
        <FilterForm />
        <CarCardList />
        {!isLastPage && (
          <LoadMoreButton type="button" onClick={handleButtonClick}>
            Load more
          </LoadMoreButton>
        )}
        <div ref={refAnchor}></div>
      </Container>
      <Toaster />
      {!inView && <ToTop />}
    </CatalogSection>
  );
};

export default CatalogPage;
