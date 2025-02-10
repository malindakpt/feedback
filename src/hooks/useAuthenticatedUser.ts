import { useSelector } from 'react-redux';
import { RootState } from '../components/login/store';
import { AuthUser } from '../interfaces/entities/authUser';

const useAuthenticatedUser  = () => {
  const user: AuthUser | null = useSelector((state: RootState) => state.auth.user);

  const isAuthenticated = user !== null;

  return { isAuthenticated, user };
};

export default useAuthenticatedUser ;