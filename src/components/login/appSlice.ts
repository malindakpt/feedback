import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../services/auth/firebase';
import { AppState } from '../../interfaces/app';
import { FilterCondition, readFilteredEntity } from '../../services/crudService';
import { User } from '../../interfaces/entities/user';
import { Collection } from '../../enums/collections.enum';

export const initialAuthState: AppState = {
  user: null,
  isAuthenticated: false,
};

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;

      const filters: FilterCondition[] = [
        { field: "id", operator: "==", value: user.uid },
      ];

      const userData = await readFilteredEntity<User>(Collection.Users, filters);

      if (userData && userData[0]) {
        return userData[0];
      }

      return thunkAPI.rejectWithValue('Authentication error.');
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 🔹 NEW: Logout Action (Async)
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await signOut(auth); // Sign out from Firebase
      return true; // Success
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      // 🔹 Handle Logout Success
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
