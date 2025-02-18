import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from "firebase/auth";
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
  { email: string; password: string }, // Arguments type
  { rejectValue: string } // Rejection type
>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;

      //Firestore readFilteredEntity to get the user data
      const filters: FilterCondition[] = [
        { field: "id", operator: "==", value: user.uid },];

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
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;