import { useSelector } from 'react-redux';
import { RootState } from '../components/admin/login/store';
import { User } from '../interfaces/user';

const useAuthenticatedUser  = () => {
  const user: User | null = useSelector((state: RootState) => state.auth.user);

  const isAuthenticated = user !== null;

  return { isAuthenticated, user };
};

export default useAuthenticatedUser ;