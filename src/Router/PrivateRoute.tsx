import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootStateType } from '../store';

const PrivateRoute: React.FC = () => {
  const user = useSelector((state: RootStateType) => state.user);
  return user.tokenIsValid ? <Outlet /> : <Navigate to="/main" />;
};

export default PrivateRoute;
