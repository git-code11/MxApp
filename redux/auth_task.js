import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {batch} from "react-redux";

import {api} from "../context/firebase";

import loader from "./loader_status";
import notify from "./notify_status";


const fakeSignUpSuccess = (u,p)=>new Promise((c,r)=>{
    setTimeout(()=>{
        if(u === "admin123" && p === "12345")
            c({user:{email:u, id:u}});
        else
            c({error:true, message:"Failed to create user", code:"email/failure"});
    },6000);
});

// First, create the thunk
const signUpByEmail = createAsyncThunk(
  'user/signUpByEmail',
  async ({userName, email, phoneNumber, password}, thunkAPI) => {
    thunkAPI.dispatch(loader.start());
    thunkAPI.dispatch(notify.info("Creating User"));
    const result = await fakeSignUpSuccess(userName, password);
    thunkAPI.dispatch(result.error?notify.error(result.message??"Failed to create user"):notify.info("Signing in"));
    thunkAPI.dispatch(loader.stop());
    return result.user;
  }
)

const initialState = {
    user:null,
    active:false
};

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signUpByEmail.fulfilled, (state, action) => {
      // Add user to the state array
        state.user = action.payload;
        state.active = true;
    })
  },
})


export default userSlice.reducer;
export {signUpByEmail};