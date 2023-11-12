import { ToTopStyled } from './ToTop.styled';
import sprite from '../../img/sprite.svg';

const ToTop = () => {
  return (
    <ToTopStyled
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <svg>
        <use href={`${sprite}#icon-chevron-down`}></use>
      </svg>
    </ToTopStyled>
  );
};

export default ToTop;
