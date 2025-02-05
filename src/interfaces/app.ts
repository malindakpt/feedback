import { User } from './entities/authUser';

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
}

