import { selectFilterButtonAction } from '../../../store/reducers/bookReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import Genre from '../Genre/Genre';
import { GenreFilterStyle } from './GenreFilter.styled';

const GenreFilter: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const genreArr = (books.genres).map((item) => {
    return (<Genre genre={item.name} id={item.id} key={item.id} name={item.name} />);
  });

  const editGenre = () => {
    if (books.selectedFilterButton === 'genre') {
      dispatch(selectFilterButtonAction(''));
      return;
    }
    dispatch(selectFilterButtonAction('genre'));
  };

  const editNothing = () => {
    dispatch(selectFilterButtonAction(''));
  };
  return (
    <GenreFilterStyle selectedFilterButton={books.selectedFilterButton}>
      <input className="select-genre__button" type="button" value="Genre" onClick={editGenre} />
      <ul className="select-genre__ul" id="ul" onMouseLeave={editNothing}>
        <img src="./assets/image/polygon.svg" alt="" />
        {genreArr}
      </ul>
    </GenreFilterStyle>
  );
};

export default GenreFilter;
