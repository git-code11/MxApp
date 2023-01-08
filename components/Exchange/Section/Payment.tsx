
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";


import ArrowBackIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";
import UploadIcon from "@mui/icons-material/UploadFile";

import PreviewIcon from "@mui/icons-material/PreviewTwoTone";

import {ViewSectionProps} from "../Base";

import TransactionStatus,{TransctionStatusProps} from "../../Transaction/Status";

import TransactionDetails,{TransactionDetailsProps} from "../../Transaction/Details";



interface PaymentSectionProps extends ViewSectionProps{
    transactionStatus:TransctionStatusProps,
    transactionDetails:TransactionDetailsProps
}

export default (props:PaymentSectionProps)=>
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography fontStyle="italic">Make Payment to the right Account</Typography>
            
            <TransactionStatus {...props.transactionStatus}/>

            <TransactionDetails {...props.transactionDetails}/>
            
            <Stack spacing={0.25}>
                <Typography variant="caption" sx={(theme)=>({color:theme.palette.info.main})} fontWeight="bold">NOTE: Reciept to be uploaded clearly and </Typography>
                <Button sx={{py:2}} component="label" startIcon={<UploadIcon fontSize="large"/>} variant="contained" color="primary">
                    Upload Payment Proof
                    <input hidden accept="image/*" type="file"/>
                </Button>
            </Stack>

            <Stack spacing={0.25}>
                <Grid container>
                    <Grid item xs={9}>
                        <Typography noWrap>
                            <b>FileName: </b>
                            <u>sjjdwppppppdjssssssssj.jpg</u>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <b>- 25kb</b>
                    </Grid>
                </Grid>
                <Button sx={{py:2}} startIcon={<PreviewIcon/>} variant="contained" color="info" onClick={props.onPreview}>Preview</Button>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
                <Button sx={{py:2}} startIcon={<ArrowBackIcon/>} variant="contained" color="primary">Cancel</Button>
                <Button sx={{py:2}} endIcon={<ArrowForwardIcon/>} variant="contained" color="warning" onClick={props.onNext}>Proceed</Button>
            </Stack>
        </Stack>
    </Paper>
;