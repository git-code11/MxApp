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

import TransactionStatus,{TransctionStatusProps} from "../../Transaction/Status";

import TransactionDetails,{TransactionDetailsProps} from "../../Transaction/Details";
import { ViewSectionProps } from "../Base";



interface ConfirmSectionProps extends ViewSectionProps{
    transactionStatus:TransctionStatusProps,
    transactionDetails:TransactionDetailsProps
}


export default (props:ConfirmSectionProps)=>
    <Box>
        <Paper sx={{p:2}}>
            <Stack spacing={3}>
                <Typography fontStyle="italic">Confirming Payment</Typography>
                
                <Stack alignItems="center">
                    <CircularProgress size={80} color="secondary"/>
                </Stack>

                <TransactionStatus  {...props.transactionStatus}/>
                
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRounded/>}>
                        <Typography variant="h6">Transaction Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TransactionDetails  {...props.transactionDetails}/>
                    </AccordionDetails>
                </Accordion>

                <Stack spacing={1}>
                    <Typography variant="caption" sx={(theme)=>({color:theme.palette.info.main})} fontWeight="bold">
                        NOTE: Transaction is Processing<br/>
                        Transaction could also be monitored from transaction History
                    </Typography>
                    <Button sx={{py:2}} variant="contained" color="info" onClick={props.onPreview}>Preview Document</Button>
                    <Button sx={{py:2}} variant="contained" color="success" onClick={props.onNext}>Complete Transaction</Button>
                </Stack>
            </Stack>
        </Paper>
    </Box>
;