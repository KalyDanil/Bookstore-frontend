import { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { BookPageStyle } from './BookPage.styled';
import BannerOfAuthorization from '../../../containers/BannerOfAuthorization/BannerOfAuthorization';
import {
  getSelectedBookRequest,
  getRecommendationsRequest,
  changeLikeAction,
} from '../../../store/reducers/bookReducer/thunks';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { liked } from '../../../utils/constants';
import AllComments from '../../../components/AllComments/AllComments';
import Recommendations from '../../../containers/Recommendations/Recommendations';
import BookBlockInBookPage from '../BookBlockInBookPage/BookBlockInBookPage';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';

const BookPage: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getSelectedBook = async () => {
      const reqParams = {
        bookId: id?.slice(1),
        userId: user.id,
      };
      await dispatch(getSelectedBookRequest(reqParams));
      if (books.selectedBook.likedBooks[0] !== undefined) {
        dispatch(changeLikeAction(liked));
      }
    };
    const getRecommendations = async () => {
      const params = {
        limit: books.limit,
        userId: user.id,
        bookId: id?.slice(1),
      };
      dispatch(getRecommendationsRequest(params));
    };
    getSelectedBook();
    getRecommendations();
    setSearchParams(searchParams);
    // eslint-disable-next-line
  }, [dispatch, books.selectedBook.id]);

  return (
    <BookPageStyle isLoggedIn={user.tokenIsValid}>
      <BookBlockInBookPage />
      <AllComments />
      <BannerOfAuthorization />
      <Recommendations />
    </BookPageStyle>
  );
};

export default BookPage;
