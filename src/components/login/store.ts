import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./appSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { userApi } from "../../api/userApi"; // import userApi
import { setupListeners } from "@reduxjs/toolkit/query";
import { branchApi } from "../../services/branchApi";

// Persist Configuration
const persistConfig = {
  key: "root",
  storage,
};

// Persisted Reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [userApi.reducerPath]: userApi.reducer,  // Add the userApi reducer here
    [branchApi.reducerPath]: branchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist to work correctly
    }).concat(userApi.middleware, branchApi.middleware),  // Add RTK Query middleware for userApi
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

// Optional: Enables automatic re-fetching on focus, reconnect, etc.
setupListeners(store.dispatch);
