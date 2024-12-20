import { useSelector } from 'react-redux';
import { RootState } from '../components/admin/login/store';
import { User } from '../interfaces/user';

const useAuthenticatedUser = () => {
  const authState = useSelector((state: RootState) => state.auth);

  const isAuthenticated = authState.isAuthenticated;
  const user: User | null = authState.user;

  return { isAuthenticated, user };
};

export default useAuthenticatedUser;
