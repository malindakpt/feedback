import { User } from './user';

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
}


