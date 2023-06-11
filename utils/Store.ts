import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { auth } from "./authSlice";
import { useDispatch } from "react-redux";
import navigationSlice   from "./navigationSlice";

export const store = configureStore({
    reducer: {navigationSlice, auth}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 