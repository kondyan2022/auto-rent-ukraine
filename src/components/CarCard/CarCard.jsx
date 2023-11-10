import { getMinLengthElement } from '../../helpers';
import { Button } from '../Button/Button.stylled';
import {
  CardContainer,
  DescriptionWrapper,
  IconWrapper,
  TitleWrapper,
} from './CarCard.styled';
import sprite from '../../img/sprite.svg';
import { useState } from 'react';
import DescriptionString from '../DescriptionString/DescriptionString';
import Backdrop from '../Backdrop/Backdrop';
import CarModalCard from '../CarModalCard/CarModalCard';

const CarCard = ({ carItem }) => {
  const {
    id,
    img,
    photoLink,
    year,
    type,
    make,
    model,
    address,
    rentalCompany,
    rentalPrice,
    mileage,
    accessories,
    functionalities,
  } = carItem;
  const [favoriteList, setFavoriteList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const heartClick = (id) => {
    if (favoriteList.includes(id)) {
      setFavoriteList((prev) => prev.filter((elem) => elem !== id));
    } else setFavoriteList((prev) => [...prev, id]);
  };

  const modalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardContainer>
        <img src={img ? img : photoLink} alt={`${make} ${model}, ${year}`} />
        <TitleWrapper>
          <h3>
            {make} <span>{model}</span>
            {`, ${year}`}
          </h3>
          <p>{rentalPrice}</p>
        </TitleWrapper>
        <DescriptionWrapper>
          <DescriptionString
            list={address.split(',').slice(-2).concat([rentalCompany])}
          />
          <DescriptionString
            list={[
              type,
              make.length > model.length ? model : make,
              `${mileage}`,
              getMinLengthElement(accessories.concat(functionalities)),
            ]}
          />
        </DescriptionWrapper>
        <Button type="button" onClick={() => setModalOpen(true)}>
          Learn more
        </Button>
        <IconWrapper favorite={!favoriteList.includes(id)}>
          <use href={`${sprite}#icon-heart-normal`} />
        </IconWrapper>
        <IconWrapper
          favorite={favoriteList.includes(id)}
          onClick={() => heartClick(id)}
        >
          <use href={`${sprite}#icon-heart-active`} />
        </IconWrapper>
      </CardContainer>

      {modalOpen && (
        <Backdrop closeModal={modalClose}>
          <CarModalCard carItem={carItem} closeModal={modalClose} />
        </Backdrop>
      )}
    </>
  );
};

export default CarCard;
