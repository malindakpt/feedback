import { configureStore } from '@reduxjs/toolkit';
import authReducer from './appSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react

const persistConfig = {
  key:"root",
  storage,
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer) ,
  },
});

export type AppDispatch = typeof store.dispatch; // Ensure this is defined
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store); 
