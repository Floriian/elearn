import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { rootReducer as reducer } from "./reducer";
import { logger } from "./middlewares";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware, logger);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
