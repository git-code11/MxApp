import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'loader_status',
  initialState: false,
  reducers: {
    start: () => true,
    stop: ()=> false,
    toggle: state=> !state
  },
});

// Action creators are generated for each case reducer function
export const { start, stop, toggle } = slice.actions

export default slice.reducer;