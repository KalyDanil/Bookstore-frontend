import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authorization from './Pages/AuthPage/Authorization/Authorization';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import MainPage from './Pages/Main/MainPage/MainPage';
import LikedBooks from './Pages/LikedBooksPage/LikedBooks/LikedBooks';
import Profile from './Pages/ProfilePage/Profile/Profile';
import Cart from './Pages/CartPage/Cart/Cart';
import BookPage from './Pages/BookPage/BookPage/BookPage';
import PrivateRoute from './Router/PrivateRoute';
import Registration from './Pages/AuthPage/Registration/Registration';
import { authorizationByTokenRequest } from './store/reducers/userReducer/thunks';
import { useAppSelector } from './utils/hooks/useAppSelector';
import { useAppDispatch } from './utils/hooks/useAppDispatch';

const App: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authorizationByTokenRequest());
  }, [dispatch]);

  if (user.loadingTokenVerify === false) {
    return null;
  }

  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/main?page=1" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/liked-books" element={<LikedBooks />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/bookPage:id" element={<BookPage />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/cart" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
