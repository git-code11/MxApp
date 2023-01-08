import { Box, Stack, Typography, IconButton,TextField, InputAdornment } from "@mui/material";
import CopyIcon from "@mui/icons-material/CopyAll"
import SimpleFieldTable from "../SimpleFieldTable";


interface BankTransactionDetailsProps{
    bankName:string,
    accountName:string,
    accountNumber:string,
    amount:string|number
}

const bankDataClean  = (data:BankTransactionDetailsProps)=>({
    "Bank Name":data.bankName,
    "Account Name":data.accountName,
    "Account Number":data.accountNumber,
    "Amount":data.amount
});

const BankTransactionDetails = (props:BankTransactionDetailsProps)=><SimpleFieldTable data={bankDataClean(props)}/>;


interface WalletTransactionDetailsProps {
    name:string,
    baseName?:string,
    address:string,
    amount:string|number
}

const WalletTransactionDetails = (props:WalletTransactionDetailsProps)=>
    <Stack spacing={1}>
        <Box>
            <Typography>Wallet Crypto: <b>{props.name} <i>{`(${props.baseName})`}</i></b></Typography>
            <Typography>Amount: <b>{props.amount}</b></Typography>
        </Box>
        <TextField 
        margin="dense"
        defaultValue={props.address}
        InputProps={{
            readOnly:true,
            endAdornment:(
                <InputAdornment position="end">
                    <IconButton color="primary">
                        <CopyIcon/>
                    </IconButton>
                </InputAdornment>
            )
        }}
        focused
        />     
    </Stack>
;


export interface TransactionDetailsProps{
    wallet?:WalletTransactionDetailsProps,
    bank?:BankTransactionDetailsProps,
}

export default (props:TransactionDetailsProps)=>
    <>
        {props.bank ? <BankTransactionDetails {...props.bank}/>:""}

        {props.wallet ? <WalletTransactionDetails {...props.wallet}/>:""}
    </>
;

