
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import PreviewIcon from "@mui/icons-material/PreviewTwoTone";
import UploadIcon from "@mui/icons-material/UploadFile";

import {useSelector, useDispatch} from "react-redux";
import { createSelector } from '@reduxjs/toolkit';

import FormProvider from "../../Form";
import {UploadBtn} from "../../Form/ServiceForm";

import {addCreditProve} from "../../../redux/exchange";
import { useCallback } from 'react';

import TransactionStatus from "../../Transaction/Status";

import TransactionDetails from "../../Transaction/Details";


import TransactionConfirmation from "../../Transaction/Confim";


import {Preview} from "../../PreviewDocument";


const _clientDocSelector = createSelector((state:any)=>state.exchange.prove, (pv:any)=>(
    [
        {label:"Debit Doc", path:pv.debit}
    ]
));

const ClientDocumentReview = ()=>{
    const documents = useSelector(_clientDocSelector);

    return (
       <Preview documents={documents} sx={{py:2, color:"#fff"}} variant="contained" color="secondary">Review Client Document</Preview>
    );
}

const UploadForm = ()=>{
    const dispatch = useDispatch();
    const uploadAction = useCallback((e:any)=>{
        dispatch(addCreditProve(e));
    },[dispatch]);

    return (
        <FormProvider>
            <Stack spacing={0.25}>
                <Typography variant="caption" sx={(theme)=>({color:theme.palette.info.main})} fontWeight="bold">NOTE: Reciept to be uploaded clearly and </Typography>
                <UploadBtn sx={{py:2}} variant="contained" color="primary" startIcon={<UploadIcon fontSize="large"/>} 
                                name="creditFile" label="Upload Transaction Document" showMetadata
                                onValueChange = {uploadAction}
                                />
            </Stack>
        </FormProvider>
    );
}


const _selector = createSelector((state:any)=>state.exchange.prove, (pv:any)=>(
    [
        {label:"Credit Doc", path:pv.credit}
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


export default ()=>{

   return (
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography fontStyle="italic">Transaction Completion Requested</Typography>
            
            <TransactionStatus/>
            
            <TransactionDetails/>
            
            <Stack spacing={1}>
                <ClientDocumentReview/>
                <UploadForm/>
                <PreviewButton/>
                <Typography variant="caption" sx={(theme)=>({color:theme.palette.warning.main})} fontWeight="bold">
                    NOTE: Transaction to be reviewed properly
                </Typography>
                <Button sx={{py:2}} variant="contained" color="error">Proceed Transaction</Button>
            </Stack>
            
            <TransactionConfirmation/>
        </Stack>
    </Paper>
   );
}