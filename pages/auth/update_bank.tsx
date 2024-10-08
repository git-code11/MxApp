import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import FormProvider from "../../components/Form";
import {Input, InputAction} from "../../components/Form/UpdateForm";


import * as yup from "yup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import {updateBank} from "../../redux/user";
import { useCallback } from "react";


const bankInfoData = [
    {name:"bankName", label:"Bank Name"},
    {name:"acctNo", label:"Account Number"},
    {name:"acctName", label:"Account Name"},
];


const schema = yup.object({
    bankName: yup.string().required(),
    acctNo: yup.string().required(),
    acctName:yup.string().required()
  }).required();


const _selector = createSelector((state:any)=>state.user.info,(info:any)=>({...info?.bank}));

const UpdateBankForm = ()=>{
    
    const dispatch = useDispatch();

    const defaultValues = useSelector(_selector);

    const submit = useCallback((data:any)=>dispatch((updateBank as any)(data)),[dispatch]);

    return (
    <FormProvider schema={schema} defaultValues={defaultValues}>
        <Paper elevation={3} sx={{p:2}}>
            <Stack spacing={2}>
                <Typography variant="h6">Bank Information</Typography>
                {bankInfoData.map((d)=><Input key={d.name} {...d}/>)}
            </Stack> 

            <InputAction action={submit} label=""/>
            
        </Paper>
    </FormProvider>
    );
}

export default function(){
    return (
        <Box>
            <BackHeader title="Update Info" color="neutral"/>
                <Container sx={{pt:8,pb:3}}>
                    <UpdateBankForm/>
                </Container>
        </Box>
    );
}