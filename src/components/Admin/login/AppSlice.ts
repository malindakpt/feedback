// src/state/AppSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';
import { User } from '../../../interfaces/User';
import { AppState } from '../../../interfaces/App';

export const initialAuthState: AppState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk<
  User, 
  { email: string; password: string }, // Arguments type
  { rejectValue: string } // Rejection type
>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      // Return the necessary user data
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload || 'Failed to login';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
