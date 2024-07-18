import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { itemsSlice } from './slices/itemsSlice'

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const itemsActions = itemsSlice.actions
