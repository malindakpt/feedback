import { configureStore } from '@reduxjs/toolkit';
import authReducer from './appSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch; // Ensure this is defined
export type RootState = ReturnType<typeof store.getState>;
