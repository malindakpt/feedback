import { User } from './entities/user';

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
}

