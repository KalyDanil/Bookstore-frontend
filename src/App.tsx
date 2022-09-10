/* eslint-disable */
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
/* eslint-enable */
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authorization from './ui/pages/authPage/Authorization';
import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import MainPage from './ui/pages/main/MainPage';
import LikedBooks from './ui/pages/likedBooksPage/LikedBooks';
import Profile from './ui/pages/profilePage/Profile';
import Cart from './ui/pages/cartPage/Cart';
import BookPage from './ui/pages/bookPage/BookPage';
import PrivateRoute from './ui/router/PrivateRoute';
import Registration from './ui/pages/authPage/Registration';
import { authorizationByTokenRequest } from './store/reducers/userReducer/thunks';
import { useAppSelector } from './utils/hooks/useAppSelector';
import { useAppDispatch } from './utils/hooks/useAppDispatch';
import LogRoute from './ui/router/LogRoute';

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
        <Route path="/authorization" element={<LogRoute />}>
          <Route path="/authorization" element={<Authorization />} />
        </Route>
        <Route path="/registration" element={<LogRoute />}>
          <Route path="/registration" element={<Registration />} />
        </Route>
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
