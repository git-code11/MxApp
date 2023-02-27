import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'notify_status',
  initialState: {message:"", status:undefined, open:false},
  reducers: {
    error: (state, {payload:message}) => ({message, status:"error", open:true}),
    success: (state, {payload:message}) => ({message, status:"success", open:true}),
    info: (state, {payload:message}) => ({message, status:"info", open:true}),
    close: ()=>({message:"", status:undefined, open:false})
  },
})

// Action creators are generated for each case reducer function


export const { error, success, info , close} = slice.actions

export default slice.reducer;