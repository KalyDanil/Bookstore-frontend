import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GenreStyleContainer } from './Genre.styled';
import { addGenreAction, removeGenreAction } from '../../../../store/reducers/bookReducer/thunks';
import type { IGenre } from '../../../../types/book';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';

const Genre: React.FC<IGenre> = ({ genre, id }) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [checked, setChecked] = useState(false);
  const genreArr = searchParams.getAll('genre');

  useEffect(() => {
    if (searchParams.getAll('genre').indexOf(id.toString()) !== -1) {
      setChecked(true);
    }
  }, [id, searchParams]);

  const addGenre: React.ChangeEventHandler<HTMLInputElement> = () => {
    if (!checked) {
      dispatch(addGenreAction(genre));
      setChecked(true);
      searchParams.append('genre', id.toString());
    }

    if (checked) {
      dispatch(removeGenreAction(genre));
      const index = genreArr.indexOf(id.toString());
      genreArr.splice(index, 1);
      searchParams.delete('genre');
      for (const genre of genreArr) {
        searchParams.append('genre', genre);
      }
      setChecked(false);
    }

    setSearchParams(searchParams);
  };

  return (
    <GenreStyleContainer>
      <input className="select-genre__checkbox" checked={checked} type="checkbox" onChange={addGenre} />
      <span>{genre}</span>
    </GenreStyleContainer>
  );
};

export default Genre;
