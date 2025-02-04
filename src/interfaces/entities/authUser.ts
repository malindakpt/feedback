export interface User {
    uid: string;
    email: string | null;
    displayName?: string;
  }
  
  export const initialUserState: User | null = null;
  