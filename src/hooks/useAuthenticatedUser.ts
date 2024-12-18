import { useSelector } from 'react-redux';
import { RootState } from '../components/admin/login/store';
import { User } from '../interfaces/user';

/**
 * Custom hook to get the authentication status and user data
 * @returns {{ isAuthenticated: boolean, user: User | null }}
 */
const useAuthenticatedUser = () => {
  const authState = useSelector((state: RootState) => state.auth);

  const isAuthenticated = authState?.isAuthenticated ?? false;
  const user: User | null = authState?.user ?? null;

  return { isAuthenticated, user };
};

export default useAuthenticatedUser;
