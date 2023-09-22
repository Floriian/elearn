import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { newsPublicApi } from "@/features";
export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(newsPublicApi.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
