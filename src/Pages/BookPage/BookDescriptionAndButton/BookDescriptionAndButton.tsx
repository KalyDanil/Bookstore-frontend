import { addBookToCartRequest } from '../../../store/reducers/bookReducer/cartThunks';
import { changeCartAmountAction, changeTotalPriceAction } from '../../../store/reducers/bookReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { BookDesctiptionAndButtonStyle } from './BookDescriptionAndButton.styled';

const BookDesctiptionAndButton: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const addToCart = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const body = {
      userId: user.id,
      bookId: books.selectedBook.id,
    };
    const button = (e.target as HTMLInputElement);

    if (button.classList.contains('notAvailable')) {
      return;
    }

    if (user.tokenIsValid) {
      dispatch(changeCartAmountAction(books.cartBooksAmount + 1));
      await dispatch(addBookToCartRequest(body));
      dispatch(changeTotalPriceAction(books.totalPrice + 1));
      return;
    }

    window.location.href = '/authorization';
  };

  return (
    <BookDesctiptionAndButtonStyle isLoggedIn={user.tokenIsValid}>
      <h2 className="bookDescription__h">Description</h2>
      <div className="bookDescription">
        <pre>{books.selectedBook.description}</pre>
      </div>
      <div className="buyingButton">
        <div>
          <span>Paperback</span>
          <input className={books.selectedBook.status} type="button" value={`$ ${books.selectedBook.price} USD`} onClick={addToCart} />
        </div>
        <div>
          <span>Hardcover</span>
          <input className={books.selectedBook.status} type="button" value={`$ ${books.selectedBook.price} USD`} onClick={addToCart} />
        </div>
      </div>
    </BookDesctiptionAndButtonStyle>
  );
};

export default BookDesctiptionAndButton;
