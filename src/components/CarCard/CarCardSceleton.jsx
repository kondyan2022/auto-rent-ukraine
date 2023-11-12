import { RotatingLines } from 'react-loader-spinner';
import { CardContainerSceleton } from './CarCard.styled';

const CarCardSceleton = () => {
  return (
    <CardContainerSceleton>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    </CardContainerSceleton>
  );
};

export default CarCardSceleton;
