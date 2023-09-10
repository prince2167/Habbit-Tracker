import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import habitReducer from "./features/habitSlice"
import labelReducer from "./features/labelSlice"
export const store = configureStore({
    reducer: {
        habit: habitReducer,
        label: labelReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector