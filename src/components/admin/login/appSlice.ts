import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';
import { User } from '../../../interfaces/user';
import { AppState } from '../../../interfaces/app';

export const initialAuthState: AppState = {
  user: null,
  isAuthenticated: false,
  
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
      state.user = null;
      
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(login.pending, (state) => {
      // })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      // .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
      //   state.user = null;
      // });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
