
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";


import TransactionStatus,{TransctionStatusProps} from "../../Transaction/Status";

import TransactionDetails,{TransactionDetailsProps} from "../../Transaction/Details";
import { ViewSectionProps } from "../Base";

import TransactionConfirmation from "../../Transaction/Confim";


interface ExecuteSectionProps extends ViewSectionProps{
    transactionStatus:TransctionStatusProps,
    transactionDetails:TransactionDetailsProps
}

export default (props:ExecuteSectionProps)=>
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography fontStyle="italic">Transaction Completion Requested</Typography>
            
            <TransactionStatus  {...props.transactionStatus}/>
            
            <TransactionDetails  {...props.transactionDetails}/>
            
            <Stack spacing={1}>
                <Button sx={{py:2, color:"#fff"}} variant="contained" color="secondary">Review Client Document</Button>
                <Button sx={{py:2}} variant="contained" color="info">Preview Document</Button>
                <Button sx={{py:2}} variant="contained" color="primary">Upload Transaction Document</Button>
                <Typography variant="caption" sx={(theme)=>({color:theme.palette.warning.main})} fontWeight="bold">
                    NOTE: Transaction to be reviewed properly
                </Typography>
                <Button sx={{py:2}} variant="contained" color="error">Proceed Transaction</Button>
            </Stack>
            
            <TransactionConfirmation/>
        </Stack>
    </Paper>
;