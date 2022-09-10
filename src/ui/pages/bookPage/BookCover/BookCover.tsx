import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* eslint-disable */
import { 
  changeLikeAction, 
  getSelectedBookRequest, 
  toLikeBookRequest 
} from '../../../../store/reducers/bookReducer/thunks';
/* eslint-enable */
import { liked, notLiked } from '../../../../utils/constants';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { BookCoverStyle } from './BookCover.styled';

const BookCover: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.user);
  const [likeLink, setLikeLink] = useState(notLiked);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getSelectedBook = async () => {
      const reqParams = {
        bookId: id?.slice(1),
        userId: user.id,
      };
      let isLiked = false;
      for (const like of books.selectedBook.likedBooks) {
        if (like?.userId === user.id) {
          isLiked = true;
        }
      }
      await dispatch(getSelectedBookRequest(reqParams));
      if (isLiked) {
        dispatch(changeLikeAction(liked));
        setLikeLink(liked);
      }
    };
    getSelectedBook();
  }, [dispatch, books.selectedBook.id, books.selectedBook.likedBooks, id, user.id]);

  const toLikeBook = () => {
    const body = {
      userId: user.id,
      bookId: id?.slice(1),
      like: false,
    };

    if (!user.tokenIsValid) {
      window.location.href = '/authorization';
      return;
    }

    if (likeLink === notLiked && user.id !== 0) {
      body.like = true;
      dispatch(toLikeBookRequest(body));
      dispatch(changeLikeAction(liked));
      setLikeLink(liked);
      return;
    }

    if (likeLink === liked && user.id !== 0) {
      dispatch(toLikeBookRequest(body));
      dispatch(changeLikeAction(notLiked));
      setLikeLink(notLiked);
    }
  };

  return (
    <BookCoverStyle>
      <img className="bookLike" src={`http://localhost:4000/images/books/${likeLink}`} alt="likeOnBook" onClick={toLikeBook} />
      <img className="bookCover" src={`http://localhost:4000/images/books/${books.selectedBook.cover}`} alt="book" />
    </BookCoverStyle>
  );
};

export default BookCover;
