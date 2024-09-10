import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';

interface AuthState {
  isAuthenticated: boolean;
  userRole: 'admin' | 'superAdmin' | 'user' | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userRole: null,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const userRole: 'admin' | 'superAdmin' | 'user' = 'admin'; // Replace with actual logic to fetch user role
    return { userRole };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Reset error state during new login attempt
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ userRole: 'admin' | 'superAdmin' | 'user' }>) => {
        state.isAuthenticated = true;
        state.userRole = action.payload.userRole;
        state.status = 'idle';
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Login failed'; // Optional: add an error message
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
