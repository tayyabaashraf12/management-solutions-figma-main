import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "../redux/slices/walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
