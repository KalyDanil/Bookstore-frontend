import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import BookDescriptionAndButton from '../BookDescriptionAndButton/BookDescriptionAndButton';
import BookStars from '../BookStars/BookStars';
import { BookInformationStyle } from './BookInformation.styled';

const BookInformation: React.FC = () => {
  const books = useAppSelector((state) => state.books);

  return (
    <BookInformationStyle>
      <h1 className="bookInformation__name">{books.selectedBook.name}</h1>
      <span className="bookInformation__author">{books.selectedBook.authorName}</span>
      <BookStars />
      <BookDescriptionAndButton />
    </BookInformationStyle>
  );
};

export default BookInformation;
