const CarCard = ({
  img,
  year,
  type,
  make,
  model,
  address,
  rentalCompany,
  price,
  mileage,
}) => {
  return (
    <div>
      <img src={img} alt={`${make} ${model}, ${year}`} />
      <div>
        <h3>
          {make} <span>{model}</span>
          {`, ${year}`}
        </h3>
        <span>{price}</span>
      </div>
      <div>
        <p>{`${address.split(',').slice(-2).join(' |')} | ${rentalCompany}`}</p>
        <p>{`${type} | ${make} | ${mileage}`}</p>
      </div>
    </div>
  );
};

export default CarCard;
