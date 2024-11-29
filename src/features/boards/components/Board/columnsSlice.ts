import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  columns: [],
}

const columnsState = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumns(state, action) {
      state.columns = action.payload
    },
  },
})

export const { addColumns } = columnsState.actions
export default columnsState.reducer
