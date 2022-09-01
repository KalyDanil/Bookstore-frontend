import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import Notification from './Notification/Notification';
import { HeaderMenuStyle } from './HeaderMenu.styled';

const HeaderMenu: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.user);

  const toProfile = () => {
    window.location.href = '/profile';
  };

  const toCart = () => {
    window.location.href = '/cart';
  };

  const toLikedBooks = () => {
    window.location.href = '/liked-books?page=1';
  };

  return (
    <HeaderMenuStyle isLoggedIn={user.tokenIsValid}>
      <img src="./assets/image/basket.svg" alt="basket" onClick={toCart} />
      <div className="header__menu-basketCounter">
        {books.cartBooksAmount}
      </div>
      <img src="./assets/image/like.svg" alt="like" onClick={toLikedBooks} />
      <img className="header__menu-profileLink" src={user.avatar} alt="profileLink" onClick={toProfile} />
      <Notification />
    </HeaderMenuStyle>
  );
};

export default HeaderMenu;
