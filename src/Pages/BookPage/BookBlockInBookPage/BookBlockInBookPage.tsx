import BookCover from '../BookCover/BookCover';
import BookInformation from '../BookInformation/BookInformation';
import { BookBlockStyle } from './BookBlockInBookPage.styled';

const BookBlockInBookPage: React.FC = () => {
  return (
    <BookBlockStyle>
      <BookCover />
      <BookInformation />
    </BookBlockStyle>
  );
};

export default BookBlockInBookPage;
