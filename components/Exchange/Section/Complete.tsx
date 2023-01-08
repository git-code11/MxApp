
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import CheckIcon from "@mui/icons-material/Check";


import TransactionStatus,{TransctionStatusProps} from "../../Transaction/Status";

import TransactionDetails,{TransactionDetailsProps} from "../../Transaction/Details";
import { ViewSectionProps } from "../Base";


interface CompleteSectionProps extends ViewSectionProps{
    transactionStatus:TransctionStatusProps,
    transactionDetails:TransactionDetailsProps
}


export default (props:CompleteSectionProps)=>
    <Box>
        <Paper sx={{p:2}}>
            <Stack spacing={3}>
                <Typography fontStyle="italic">Transaction Completed</Typography>
                
                <Stack alignItems="center">
                    <CheckIcon sx={{fontSize:"4rem"}} color="success"/>
                </Stack>

                <TransactionStatus  {...props.transactionStatus}/>
                
                <TransactionDetails  {...props.transactionDetails}/>

                <Stack spacing={1}>
                    <Typography variant="caption" sx={(theme)=>({color:theme.palette.success.main})} fontWeight="bold">
                        NOTE: Transaction is Completed<br/>
                        <u>Contact Admin Via Whatsapp</u>
                    </Typography>
                    <Button sx={{py:2, color:"#fff"}} variant="contained" color="info" onClick={props.onPreview}>View All Documents</Button>
                    <Button sx={{py:2, color:"#fff"}} variant="contained" color="secondary">Save Reciept</Button>
                </Stack>
            </Stack>
        </Paper>
    </Box>
;
