import { useEffect } from 'react';
import CarCardList from '../../components/CarCardList/CarCardList';
import { Container } from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNextPageThunk,
  getIsLastPage,
  getPageNumber,
} from '../../redux/carsSlice';
import { CatalogSection, LoadMoreButton } from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLastPage = useSelector(getIsLastPage);
  const currentPage = useSelector(getPageNumber);

  useEffect(() => {
    if (currentPage === 0) {
      dispatch(fetchNextPageThunk());
    }
  }, [dispatch, currentPage]);

  return (
    <CatalogSection>
      <Container>
        <CarCardList></CarCardList>

        {!isLastPage && (
          <LoadMoreButton
            type="button"
            onClick={() => dispatch(fetchNextPageThunk())}
          >
            Load more
          </LoadMoreButton>
        )}
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
