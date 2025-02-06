export interface AuthUser {
    id: string;
    email: string | null;
    displayName?: string;
  }
  
  export const initialUserState: AuthUser | null = null;
  