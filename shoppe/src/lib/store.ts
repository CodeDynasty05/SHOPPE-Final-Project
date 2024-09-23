"use client";
import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "@/app/Slices/BasketSlice";

export const store = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
