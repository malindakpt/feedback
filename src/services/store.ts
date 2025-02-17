import { configureStore } from "@reduxjs/toolkit";
import { branchApi } from "../services/branchApi";

export const store = configureStore({
  reducer: {
    [branchApi.reducerPath]: branchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(branchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
