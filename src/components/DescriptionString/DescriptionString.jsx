import { DiscriptionText, SpanStyled } from './DescriptionString.styled';

const Bar = () => {
  return <SpanStyled> | </SpanStyled>;
};

const DescriptionString = ({ list, wrap }) => {
  return (
    <DiscriptionText wrap={wrap}>
      {list.map((elem, index, arr) => (
        <span key={index}>
          {elem.trim()} {index !== arr.length - 1 && <Bar />}
        </span>
      ))}
    </DiscriptionText>
  );
};
export default DescriptionString;
