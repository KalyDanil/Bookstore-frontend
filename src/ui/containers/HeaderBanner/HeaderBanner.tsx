import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { HeaderBannerStyle } from './HeaderBanner.styled';

const HeaderBanner: React.FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <HeaderBannerStyle isLoggedIn={user.tokenIsValid}>
      <div className="background">
        <h1>Build your library with us</h1>
        <span>Buy two books and get one for free</span>
        <input type="button" value="Choose a book" />
      </div>
      <img className="books" src="./assets/image/headerBackgroundBooks.svg" alt="BackgroundBooks" />
      <img className="girl" src="./assets/image/headerBackgroundGirl.svg" alt="BackgroundGirl" />
    </HeaderBannerStyle>
  );
};

export default HeaderBanner;
