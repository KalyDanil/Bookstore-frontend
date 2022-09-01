import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { selectFilterButtonAction } from '../../../store/reducers/bookReducer/thunks';
import { sortByConstants } from '../../../utils/constants';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { SortByFilterStyle } from './SortByFilter.styled';

const SortByFilter: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setsortBy] = useState('name');

  useEffect(() => {
    if (searchParams.getAll('sortBy')[0] !== null) {
      setsortBy(searchParams.getAll('sortBy')[0]);
    }
  }, [searchParams]);

  const editSort = () => {
    if (books.selectedFilterButton === 'sortBy') {
      dispatch(selectFilterButtonAction(''));
      return;
    }
    dispatch(selectFilterButtonAction('sortBy'));
  };

  const editNothing = () => {
    dispatch(selectFilterButtonAction(''));
  };

  const selectSortBy = (value: string) => {
    const arr = value.toLowerCase().split(' ');
    for (let i = 1; i < arr.length; i++) {
      const upperWord = `${arr[i][0].toUpperCase()}${arr[i].slice(1)}`;
      arr[i] = upperWord;
    }
    const str = arr.join('');
    setsortBy(str);
    searchParams.delete('sortBy');
    searchParams.append('sortBy', str);
    setSearchParams(searchParams);
  };

  return (
    <SortByFilterStyle selectedFilterButton={books.selectedFilterButton} sortBy={sortBy}>
      <input className="select-sortBy__button" type="button" value="Sort by" onClick={editSort} />
      <div className="select-sortBy__ul" onMouseLeave={editNothing}>
        <img src="./assets/image/polygon.svg" alt="" />
        {sortByConstants.map((item, index) => (
          <div id={item.toLowerCase().split(' ').join('')} onClick={() => selectSortBy(item)} key={index}>{item}</div>
        ))}
      </div>
    </SortByFilterStyle>
  );
};

export default SortByFilter;
