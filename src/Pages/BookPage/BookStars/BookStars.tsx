import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import HollowStarsToRating from '../../../components/HollowStarsToRating/HollowStarsToRating';
import StarsToRating from '../../../components/StarsToRating/StarsToRating';
import { BookStarsStyle } from './BookStars.styled';

const BookStars: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.user);
  const starsArr = [];
  const hollowStarsArr = [];
  const defaultHollowStarsArr = [];

  for (let i = 0; i < books.userRating; i++) {
    starsArr.push([]);
  }

  for (let i = 0; i < (books.maxRating - books.userRating); i++) {
    hollowStarsArr.push([]);
  }

  const stars = starsArr.map((item, index) => {
    return (<StarsToRating value={index} key={index} />);
  });

  const hollowStars = hollowStarsArr.map((item, index) => {
    return (<HollowStarsToRating value={index + starsArr.length} key={index} />);
  });

  defaultHollowStarsArr.length = hollowStarsArr.length + starsArr.length;
  const defaultHollowStars = hollowStarsArr.map((item, index) => {
    return (<HollowStarsToRating value={0} key={index} />);
  });
  return (
    <BookStarsStyle isLoggedIn={user.tokenIsValid}>
      <div className="bookRating">
        <img src="http://localhost:4000/images/books/star.svg" alt="star" />
        <span>{books.selectedBook.rating}</span>
      </div>
      <div className="makingRatingDiv">
        <div className="starsToRate">
          {stars}
          {hollowStars}
        </div>
        <div className="defaultStarsToRate">
          {defaultHollowStars}
        </div>
        <div className="rateThisBook">
          <img src="./assets/image/ratingArrow.svg" alt="ratingArrow" />
          <span>Rate this book</span>
        </div>
      </div>
    </BookStarsStyle>
  );
};

export default BookStars;
