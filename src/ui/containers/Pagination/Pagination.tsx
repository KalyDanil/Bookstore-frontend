import { useSearchParams } from 'react-router-dom';
import { getPageAction } from '../../../store/reducers/bookReducer/thunks';
import ControllerPoints from '../ControllerPoints';
import type { IPageCount } from '../../../types/book';
import { PaginationStyle } from './Pagination.styled';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';

const Pagination: React.FC<IPageCount> = ({ pageCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const toLeftPage = () => {
    let nextPage = (+searchParams.getAll('page') - 1).toString();
    if (+nextPage <= 0) { nextPage = '1'; }
    searchParams.delete('page');
    searchParams.append('page', nextPage);
    setSearchParams(searchParams);
    dispatch(getPageAction(+nextPage));
  };

  const toRightPage = () => {
    let nextPage = (+searchParams.getAll('page') + 1).toString();
    if (+nextPage > pageCount - 1) { nextPage = (pageCount).toString(); }
    searchParams.delete('page');
    searchParams.append('page', nextPage);
    setSearchParams(searchParams);
    dispatch(getPageAction(+nextPage));
  };

  return (
    <PaginationStyle pageCount={pageCount}>
      <img src="http://localhost:4000/images/books/left.svg" alt="left" onClick={toLeftPage} />
      <ControllerPoints pageCount={pageCount} />
      <img src="http://localhost:4000/images/books/right.svg" alt="right" onClick={toRightPage} />
    </PaginationStyle>
  );
};

export default Pagination;
