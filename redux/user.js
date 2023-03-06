import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {api} from "../context/firebase";

import * as loader from "./loader_status";
import * as notify from "./notify_status";

const delay = (d,t)=>new Promise((c,r)=>setTimeout(()=>c(d),t??2500));

const fakeSignUpSuccess = (u,p)=>{
    if(u && p === "1234")
        return delay({user:{email:u, id:~~(Math.random()*10000)}});
    else
        return delay({error:true, message:"Failed to create user", code:"email/failure"});
};



const signUpByEmail = createAsyncThunk(
  'user/signUpByEmail',
  async ({email, password, userName, phoneNumber}, thunkAPI) => {
    thunkAPI.dispatch(loader.start());
    thunkAPI.dispatch(notify.info("Creating User"));
    const result = await api.createUserWithEmailAndPassword(email, password, {userName, phoneNumber});
    thunkAPI.dispatch(result.error?notify.error(result?.message??"Failed to create user"):notify.success("Signing in"));
    thunkAPI.dispatch(loader.stop());
    return !result.error;
  }
);


const logInByEmail = createAsyncThunk(
  'user/logInByEmail',
  async ({email, password}, thunkAPI) => {
    thunkAPI.dispatch(loader.start());
    thunkAPI.dispatch(notify.info("Logging in"));
    const result = await api.logInWithEmailAndPassword(email, password);
    thunkAPI.dispatch(result.error?notify.error(result?.message??"Failed to create user"):notify.success("Logging in"));
    thunkAPI.dispatch(loader.stop());
    return !result.error;
  }
);

const logOut = createAsyncThunk(
    'user/logOut',
    async (_, thunkAPI) => {
      thunkAPI.dispatch(loader.start());
      thunkAPI.dispatch(notify.info("Logging Out"));
      await api.logOut();//delay(Math.random()*10 > 6);
      thunkAPI.dispatch(notify.info("logged out"));
      thunkAPI.dispatch(loader.stop());
      return true;
    }
  );

const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({image, ...data}, thunkAPI) => {
    thunkAPI.dispatch(loader.start());
    thunkAPI.dispatch(notify.info("Uploading profile pics"));
    let uploadResult;
    try{
      const imageBlob = await fetch(image).then(d=>d.blob());
      //debugger;
      uploadResult = await api.uploadProfilePic(imageBlob);
    }catch(error){
      
      notify.error(error?.message??"Failed to upload");
    }
    
    if(uploadResult?.error){
      notify.error(error?.message??"Failed to upload");
    }
    
    if(uploadResult)
    {
      thunkAPI.dispatch(notify.info("Updating profile"));
      const result = await api.updateProfileInfo(null,{...data,image:uploadResult?.metadata?.fullPath});
      thunkAPI.dispatch(result.error?notify.error(result?.message??"Failed to update user profile"):notify.success("Profile Updated"));
    }
    thunkAPI.dispatch(loader.stop());
    return !result.error;
  }
);

const getProfile = createAsyncThunk(
  'user/getProfile',
  async(_,thunkAPI)=>{
    thunkAPI.dispatch(loader.start());
    thunkAPI.dispatch(notify.info("getting profile info"));
    const result = await api.getProfile();
    thunkAPI.dispatch(result.error?notify.error(result?.message??"Failed to load user profile"):notify.success("Profile Loaded"));
    thunkAPI.dispatch(addProfile(result));
    thunkAPI.dispatch(loader.stop());
  }
);

const updateBank = createAsyncThunk(
  'user/updateBank',
  async (data, thunkAPI) => {
    thunkAPI.dispatch(loader.start());
    thunkAPI.dispatch(notify.info("Updating Bank Info"));
    const result = await api.updateBankInfo(null,data);
    thunkAPI.dispatch(result.error?notify.error(result?.message??"Failed to update bank info"):notify.success("Info Updated"));
    thunkAPI.dispatch(loader.stop());
    return !result.error;
  }
);

const initialState = {
    uid:null,
    //data:null,
    info: null
};

// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    authChange(state, {payload}){
        state.uid = payload;
    },

    addProfile(state, {payload}){
      console.log("addProfile", payload);
      state.info = {...state.info, ...payload};
    }
  },
  
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    // builder.addCase(logInByEmail.fulfilled, (state, action) => {
    //   // Add user to the state array
    //     state.data = action.payload;
    // });

    builder.addCase(logOut.fulfilled, (state) => {
      state.info = null;
      state.uid = null;
    });

  },
})

const {authChange, addProfile} = userSlice.actions;
export default userSlice.reducer;
export {signUpByEmail, logOut, logInByEmail, authChange, addProfile, updateProfile, updateBank, getProfile};