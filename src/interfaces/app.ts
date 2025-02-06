import { AuthUser } from './entities/authUser';

export interface AppState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

