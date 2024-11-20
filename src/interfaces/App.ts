import { User } from './User';

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
}


