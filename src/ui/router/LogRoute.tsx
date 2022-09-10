import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootStateType } from '../../store';

const LogRoute: React.FC = () => {
  const user = useSelector((state: RootStateType) => state.user);
  return user.tokenIsValid ? <Navigate to="/main" /> : <Outlet />;
};

export default LogRoute;
