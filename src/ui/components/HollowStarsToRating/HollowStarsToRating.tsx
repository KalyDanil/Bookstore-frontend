import { HollowStarStyle } from './HollowStarsToRating.styled';
import { changeRatingRequest, getUserRatingAction } from '../../../store/reducers/bookReducer/thunks';
import type { IStars } from '../../../types/book';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';

const HollowStarsToRating: React.FC<IStars> = ({ value }) => {
  const user = useAppSelector((state) => state.user);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const changeRating = () => {
    const body = {
      rating: value + 1,
      userId: user.id,
      bookId: books.selectedBook.id,
    };

    if (user.tokenIsValid) {
      dispatch(changeRatingRequest(body));
      dispatch(getUserRatingAction(value + 1));
      return;
    }

    window.location.href = '/authorization';
  };
  return (
    <HollowStarStyle>
      <img src="http://localhost:4000/images/books/hollowStar.svg" alt="star" onClick={changeRating} />
    </HollowStarStyle>
  );
};

export default HollowStarsToRating;
