import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/app";
import { rootReducer as reducer } from "@/app";
import { logger } from "./middlewares";
export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware, logger);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
