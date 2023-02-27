
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import CheckIcon from "@mui/icons-material/Check";

import TransactionStatus from "../../Transaction/Status";

import TransactionDetails from "../../Transaction/Details";

import {Preview} from "../../PreviewDocument";
import {useSelector} from "react-redux";
import { createSelector } from '@reduxjs/toolkit';


const _selector = createSelector((state:any)=>state.exchange.prove, (pv:any)=>(
    [
        {label:"Debit Doc", path:pv.debit},
        {label:"Credit Doc", path:pv.credit}
    ]
));


const PreviewButton = ()=>{
    const documents = useSelector(_selector);

    return (
        <Preview sx={{py:2}} variant="contained" documents={documents} color="info">View All Documents</Preview>
    );
}

const SaveButton = ()=>{
    return (
        <Button sx={{py:2, color:"#fff"}} variant="contained" color="secondary">Save Reciept</Button>
    );
}



export default ()=>{

    return (
        <Box>
            <Paper sx={{p:2}}>
                <Stack spacing={3}>
                    <Typography fontStyle="italic">Transaction Completed</Typography>
                    
                    <Stack alignItems="center">
                        <CheckIcon sx={{fontSize:"4rem"}} color="success"/>
                    </Stack>

                    <TransactionStatus/>
                    
                    <TransactionDetails/>

                    <Stack spacing={1}>
                        <Typography variant="caption" sx={(theme)=>({color:theme.palette.success.main})} fontWeight="bold">
                            NOTE: Transaction is Completed<br/>
                            <u>Contact Admin Via Whatsapp</u>
                        </Typography>
                        <PreviewButton/>
                        <SaveButton/>
                    </Stack>
                </Stack>
            </Paper>
        </Box>

    );
};
