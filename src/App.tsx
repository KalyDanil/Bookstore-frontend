import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Authorization from './Pages/AuthPage/Authorization/Authorization';
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
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </Router>
  );
};

export default App;
