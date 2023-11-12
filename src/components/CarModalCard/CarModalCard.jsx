import DescriptionString from '../DescriptionString/DescriptionString';
import RentalConditionList from '../RentalConditionList/RentalConditionList';
import sprite from '../../img/sprite.svg';
import {
  AccessoriesList,
  CarModalContainer,
  CloseIconWrapper,
  DescriptionText,
  DescriptionWrapper,
  RentalButton,
  Title,
} from './CarModalCard.styled';

const CarModalCard = ({ carItem, closeModal }) => {
  const {
    id,
    img,
    photoLink,
    year,
    type,
    make,
    model,
    fuelConsumption,
    engineSize,
    description,
    address,
    rentalPrice,
    mileage,
    accessories,
    functionalities,
    rentalConditions,
  } = carItem;
  return (
    <CarModalContainer>
      <img src={img ? img : photoLink} alt={`${make} ${model}, ${year}`} />

      <h3>
        {make} <span>{model}</span>
        {`, ${year}`}
      </h3>
      <DescriptionWrapper>
        <DescriptionString
          list={address
            .split(',')
            .slice(-2)
            .concat([`Id: ${id}`, `Year: ${year}`, `Type: ${type}`])}
        />
        <DescriptionString
          list={[
            `Fuel Consumption: ${fuelConsumption}`,
            `Engine Size: ${engineSize}`,
          ]}
        />
      </DescriptionWrapper>
      <DescriptionText>{description}</DescriptionText>
      <Title>Accessories and functionalities:</Title>
      <AccessoriesList>
        <li>
          <DescriptionString list={accessories} />
        </li>
        <li>
          <DescriptionString list={functionalities} wrapText={true} />
        </li>
      </AccessoriesList>
      <Title>Rental Conditions:</Title>
      <RentalConditionList
        list={rentalConditions
          .split('\n')
          .concat([
            `Mileage: ${mileage.toLocaleString('en')}`,
            `Price: ${rentalPrice}`,
          ])}
      />
      <RentalButton href="tel:+380730000000">Rental car</RentalButton>
      <CloseIconWrapper onClick={closeModal}>
        <use href={`${sprite}#icon-close`} />
      </CloseIconWrapper>
    </CarModalContainer>
  );
};

export default CarModalCard;
