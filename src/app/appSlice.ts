import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
  app: { isVisibleSidebar: boolean }
}

const initialState: AppState = {
  app: { isVisibleSidebar: true },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.app = { ...state.app, isVisibleSidebar: action.payload }
    },
  },
})

export const { toggleSidebar } = appSlice.actions
export default appSlice.reducer
