import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  user: { id: string; username: string; email: string }
}

const initialState: AuthState = {
  user: {
    id: '',
    username: '',
    email: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAuthUser(state, action) {
      state.user = action.payload
    },
  },
})

export const { addAuthUser } = userSlice.actions
export default userSlice.reducer
