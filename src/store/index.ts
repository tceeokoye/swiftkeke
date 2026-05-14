import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token/token-slice";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
