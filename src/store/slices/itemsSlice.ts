import { createSlice } from '@reduxjs/toolkit'
import { generateRandomColor } from '@/utils'

interface Item {
  id: number
  color: string
}

export interface InitialState {
  items: Item[]
}

const initialState: InitialState = {
  items: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state) => {
      state.items.unshift({ id: Date.now(), color: generateRandomColor() })
    },
    removeItem: (state) => {
      state.items.pop()
    },
  },
})
