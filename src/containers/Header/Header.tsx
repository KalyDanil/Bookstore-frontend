import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { refusalAction, nameChangerAction } from '../../store/reducers/userReducer/thunks';
import { HeaderStyled } from './Header.styled';
import { getBooksRequest } from '../../store/reducers/bookReducer/thunks';
import { useAppSelector } from '../../utils/hooks/useAppSelector';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { useAppDispatch } from '../../utils/hooks/useAppDispatch';
import { getCartBooksRequest } from '../../store/reducers/bookReducer/cartThunks';

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const getBooks = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      genres: searchParams.getAll('genre'),
      minPrice: searchParams.get('minPrice') == null ? books.minPrice : searchParams.get('minPrice'),
      maxPrice: searchParams.get('maxPrice') == null ? books.maxPrice : searchParams.get('maxPrice'),
      sortBy: searchParams.get('sortBy'),
      search: searchParams.get('search'),
      page: searchParams.get('page'),
      limit: books.limit,
      userId: user.id,
    };
    await dispatch(getBooksRequest(params));
  };

  useEffect(() => {
    const getCartBooks = () => {
      const params = {
        userId: user.id,
      };
      if (user.id !== 0) {
        dispatch(getCartBooksRequest(params));
      }
    };
    setSearchParams(searchParams);
    getCartBooks();
  }, [searchParams, setSearchParams, dispatch, user.id, books.cartBooksAmount]);

  const nameChanger = () => {
    if (user.headerButton === 'LogIn') {
      dispatch(nameChangerAction('SingUp'));
      return;
    }
    dispatch(nameChangerAction('LogIn'));
  };

  const inputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchParams.delete('search');
    searchParams.append('search', e.target.value);
    setSearchParams(searchParams);
  };

  const logOut = () => {
    dispatch(refusalAction());
    localStorage.setItem('token', 'err');
    window.location.href = '/main?page=1';
  };

  const toMainPage = () => {
    window.location.href = '/main?page=1';
  };

  return (
    <HeaderStyled isLoggedIn={user.tokenIsValid} headerButton={user.headerButton}>
      <img src="./assets/image/logoBlack.svg" alt="logo" />
      <input type="button" className="logOut" onClick={logOut} value="Log Out" />
      <p className="header__catalog" onClick={toMainPage}>Catalog</p>
      <form className="header__search-div" onSubmit={getBooks}>
        <img src="./assets/image/search.svg" alt="search" />
        <input className="header__search" type="text" placeholder="Search" onChange={inputSearch} value={search} />
      </form>
      <Link to="/authorization" className="header__button logIn" onClick={nameChanger}>Log In</Link>
      <Link to="/registration" className="header__button singUp" onClick={nameChanger}>Sing Up</Link>
      <HeaderMenu />
    </HeaderStyled>
  );
};

export default Header;
