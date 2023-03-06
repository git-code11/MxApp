
import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import csc  from "countrycitystatejson"; 

import FormProvider from "../../components/Form";
import {Input, ComboSelect as Select, ComboSelectRef as SelectRef, InputAction, InputImage} from "../../components/Form/UpdateForm";

import * as regex_test from "../../components/input_test";

import * as yup from "yup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import {updateProfile} from "../../redux/user";
import { useCallback } from "react";


const countryData = csc.getCountries().map((d:any)=>(d.shortName))

const userInfoData = [
    [
        {name:"firstName", label:"First Name"},
        {name:"lastName", label:"Last Name"},
        {name:"phoneNumber", label:"Phone Number"},
        {name:"email", label:"Email Address"},
        {name:"address", label:"Address"},
    ],
    [
        {name:"nationality", label:"Nationality", options:countryData, autoCompleteProps:{getOptionLabel:(d:any)=>csc.getCountryByShort(d)?.name??""}},
        {name:"state", label:"State", refName:"nationality", onRefChange:(v:any, cb:any)=>cb(csc.getStatesByShort(v))}
    ]
];


const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber:yup.string().matches(regex_test.tel, "invalid telephone number").required(),
    email: yup.string().matches(regex_test.email, "email invalid").required(),
    address:yup.string().min(5).required(),
    nationality:yup.string().required(),
    state:yup.string().required(),
    image:yup.string().required()
  }).required();


const _selector = createSelector((state:any)=>state.user.info,(info:any)=>({...info?.account, image:info?.image}));
const UpdateProfileForm = ()=>{
    const dispatch = useDispatch();
    const defaultValues = useSelector(_selector);

    const submit = useCallback((data:any)=>dispatch((updateProfile as any)(data)),[dispatch]);

    return (
    <FormProvider schema={schema} defaultValues={defaultValues}>
        <Paper elevation={3} sx={{p:2}}>
            <Stack spacing={2}>
                <Typography variant="h6">User Information</Typography>
                <InputImage name="image" rules={{required:true, max:25}}/>
                {userInfoData[0].map((d)=><Input key={d.name} {...d}/>)}
                <Select {...(userInfoData[1][0] as any)}
                />
                <SelectRef {...(userInfoData[1][1] as any)}/>
            </Stack> 

            <InputAction action={submit} label=""/>
            
        </Paper>
    </FormProvider>
    );
}


export default function(){
    return (
        <Box>
            <BackHeader title="Update Profile" color="neutral"/>
            <Container sx={{pt:8,pb:3}}>
                <UpdateProfileForm/>
            </Container>
        </Box>
    );
}