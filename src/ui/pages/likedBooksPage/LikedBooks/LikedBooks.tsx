import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPageAction, getLikedBooksRequest } from '../../../../store/reducers/bookReducer/thunks';
import { Books } from './LikedBooks.styled';
import Book from '../../../components/Book';
import Pagination from '../../../containers/Pagination';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';

const LikedBooks: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const books = useAppSelector((state) => state.books);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getBooks = async () => {
      const params = {
        page: searchParams.get('page'),
        limit: books.limit,
        userId: user.id,
      };
      await dispatch(getLikedBooksRequest(params));
    };
    getBooks();
    setSearchParams(searchParams);
    dispatch(getPageAction(+searchParams.getAll('page')[0]));
  }, [books.page, dispatch, searchParams, setSearchParams, books.limit, user.id]);

  const page = (books.books).map((item) => {
    return (<Book book={item} key={item.id} />);
  });

  return (
    <div>
      <Books>
        {page}
      </Books>
      <Pagination pageCount={Math.ceil(books.booksCount / books.limit)} />
    </div>
  );
};

export default LikedBooks;
