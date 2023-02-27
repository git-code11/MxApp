
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";


import ArrowBackIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";
import UploadIcon from "@mui/icons-material/UploadFile";

import PreviewIcon from "@mui/icons-material/PreviewTwoTone";


import TransactionStatus from "../../Transaction/Status";

import TransactionDetails from "../../Transaction/Details";

import {useNext} from "./Provider";

import FormProvider from "../../Form";
import {UploadBtn} from "../../Form/ServiceForm";


import {useDispatch} from "react-redux";
import {addDebitProve} from "../../../redux/exchange";
import { useCallback } from 'react';

import {Preview} from "../../PreviewDocument";


import {useSelector} from "react-redux";
import { createSelector } from '@reduxjs/toolkit';


const UploadForm = ()=>{
    const dispatch = useDispatch();
    const uploadAction = useCallback((e:any)=>{
        dispatch(addDebitProve(e));
    },[dispatch]);

    return (
        <FormProvider>
            <Stack spacing={0.25}>
                <Typography variant="caption" sx={(theme)=>({color:theme.palette.info.main})} fontWeight="bold">NOTE: Reciept to be uploaded clearly and </Typography>
                <UploadBtn variant="contained" color="primary" startIcon={<UploadIcon fontSize="large"/>} 
                                name="debitFile" label="Upload Payment Proof" showMetadata
                                onValueChange = {uploadAction}
                                />
            </Stack>
        </FormProvider>
    );
}


const _selector = createSelector((state:any)=>state.exchange.prove, (pv:any)=>(
    [
        {label:"Debit Doc", path:pv.debit}
    ]
));


const PreviewButton = ()=>{
    const documents = useSelector(_selector);

    return (
        (documents && documents?.[0]?.path?.length > 0)?
            (<Preview sx={{py:2}} startIcon={<PreviewIcon/>} 
                variant="contained" documents={documents}
                color="info">Preview</Preview>):<div/>
    )
}


const ActionButton = ()=>{
    const next:any = useNext();

    return (
    <Stack direction="row" justifyContent="space-between">
        <Button sx={{py:2}} startIcon={<ArrowBackIcon/>} variant="contained" color="primary">Cancel</Button>
        <Button sx={{py:2}} endIcon={<ArrowForwardIcon/>} variant="contained" color="warning" onClick={next}>Proceed</Button>
    </Stack>
    );
}


export default ()=>{
    
   
    
    return(
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography fontStyle="italic">Make Payment to the right Account</Typography>
            
            <TransactionStatus/>

            <TransactionDetails/>
            
            <Stack spacing={0.25}>
                <UploadForm/>
                <PreviewButton/>
            </Stack>

            <ActionButton/>

        </Stack>
    </Paper>)
}
;