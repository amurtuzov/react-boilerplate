import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MainState } from './types.ts'

const initialState: MainState = {
  windowWidth: window.innerWidth,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateWindowWidth: (state, action: PayloadAction<number>) => {
      state.windowWidth = action.payload
    },
  },
})
export const { updateWindowWidth } = mainSlice.actions
export default mainSlice.reducer
