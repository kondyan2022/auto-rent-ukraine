import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../CarCard/CarCard';
import {
  addToFavoriteCache,
  deleteFavorite,
  getFavoriteCacheItems,
  getFavoriteIndexes,
} from '../../redux/favoritiesSlice';
import { useEffect } from 'react';
import { getCarItems } from '../../redux/carsSlice';
import { getCarById } from '../../utils/mockapi';
import { CarList } from './CarCardFavoriteList.styled';
import toast, { Toaster } from 'react-hot-toast';
import CarCardSceleton from '../CarCard/CarCardSceleton';
import CarCardFavoriteListEmpty from './CarCardFavoriteListEmpty';

const CarCardFavoriteList = () => {
  const favoriteCarIndexes = useSelector(getFavoriteIndexes);
  const carsRes = useSelector(getCarItems);
  const carsCache = useSelector(getFavoriteCacheItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const carItems = favoriteCarIndexes.reduce((acc, elem) => {
      // Перевіряеємо чи є у кєшу
      let foundItem = carsCache.filter((item) => item.id === elem)[0];
      if (foundItem) {
        return acc;
      }
      //  Якщо ні Перевіряеємо чи є у поточній даті
      foundItem = carsRes.filter((item) => item.id === elem)[0];
      if (foundItem) {
        return acc;
      }
      //  Якщо ні Формуємо масив промісів
      acc.push(getCarById(elem));
      return acc;
    }, []);
    //  Якщо треба довантажити Виконуємо запит
    if (carItems.length > 0) {
      Promise.allSettled(carItems).then((results) =>
        results.forEach((result) => {
          if (result.status === 'fulfilled') {
            const { data, id } = result.value;
            // Якщо id відсутній в базі mockapi повертає пустий масив
            if (data) {
              dispatch(addToFavoriteCache(data));
            } else {
              dispatch(deleteFavorite(id));
              toast.error(`id=${id} isn't accessible, removed from favorites!`);
            }
          }
          if (result.status === 'rejected') {
            const {
              message,
              config: {
                params: { id },
              },
            } = result.reason;
            toast.error(`Loading id=${id}: ${message}!`);
          }
        }),
      );
    }
  }, [favoriteCarIndexes, carsRes, carsCache, dispatch]);

  const getFromCache = (index) =>
    carsCache.filter((item) => item.id === index)[0];

  return (
    <>
      {' '}
      {favoriteCarIndexes.length > 0 ? (
        <CarList>
          {favoriteCarIndexes.map((element) => {
            const foundItem = getFromCache(element);
            return (
              <li key={element}>
                {foundItem ? (
                  <CarCard carItem={foundItem} />
                ) : (
                  <CarCardSceleton />
                )}
              </li>
            );
          })}
        </CarList>
      ) : (
        <CarCardFavoriteListEmpty />
      )}
      <Toaster />
    </>
  );
};

export default CarCardFavoriteList;
