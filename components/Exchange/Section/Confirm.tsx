import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import CircularProgress from "@mui/material/CircularProgress";

import { ExpandMoreRounded } from "@mui/icons-material";

import TransactionStatus from "../../Transaction/Status";

import TransactionDetails from "../../Transaction/Details";


import {Preview} from "../../PreviewDocument";
import {useSelector} from "react-redux";
import { createSelector } from '@reduxjs/toolkit';

import {useNav} from ".";

const _selector = createSelector((state:any)=>state.exchange.prove, (pv:any)=>(
    [
        {label:"Credit Doc", path:pv.credit}
    ]
));


const PreviewButton = ()=>{
    const documents = useSelector(_selector);

    return (
        <Preview sx={{py:2}} variant="contained" title="Payee Document" documents={documents} color="info">Preview</Preview>
    );
}

const ActionButton = ()=>{
    const {next}:any = useNav();

    return (
        <Button sx={{py:2}} variant="contained" color="success" onClick={next}>Complete Transaction</Button>
    );
}


export default ()=>{

    return (
    <Box>
        <Paper sx={{p:2}}>
            <Stack spacing={3}>
                <Typography fontStyle="italic">Confirming Payment</Typography>
                
                <Stack alignItems="center">
                    <CircularProgress size={80} color="secondary"/>
                </Stack>

                <TransactionStatus/>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRounded/>}>
                        <Typography variant="h6">Transaction Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TransactionDetails/>
                    </AccordionDetails>
                </Accordion>

                <Stack spacing={1}>
                    <Typography variant="caption" sx={(theme)=>({color:theme.palette.info.main})} fontWeight="bold">
                        NOTE: Transaction is Processing<br/>
                        Transaction could also be monitored from transaction History
                    </Typography>
                    <PreviewButton/>
                    <ActionButton/>
                </Stack>
            </Stack>
        </Paper>
    </Box>
    );
}
;