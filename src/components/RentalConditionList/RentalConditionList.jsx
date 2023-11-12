import { ConditionItem, ConditionList } from './RentalConditionList.styled';

const RentalConditionList = ({ list }) => {
  const mayBeBadItem = list[2];
  const newList = [...list];
  if (mayBeBadItem.length > 35) {
    newList.splice(2, 1);
    newList.splice(3, 0, mayBeBadItem);
  }

  return (
    <ConditionList>
      {newList.map((elem, index) => (
        <ConditionItem key={index} double={elem.includes(':')}>
          {elem
            .split(':')
            .map((e, i, arr) =>
              i === 0 ? arr.length > 1 ? e + ':' : e : <span key={i}>{e}</span>,
            )}
        </ConditionItem>
      ))}
    </ConditionList>
  );
};
export default RentalConditionList;
