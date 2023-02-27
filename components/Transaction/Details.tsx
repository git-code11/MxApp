import { Box, Stack, Typography, IconButton,TextField, InputAdornment } from "@mui/material";
import CopyIcon from "@mui/icons-material/CopyAll"
import SimpleFieldTable from "../SimpleFieldTable";

import {useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";

const _bankSelector = createSelector((state:any)=>state.exchange.paymentInfo.bank,
                    (data)=>({
                        "Bank Name":data.bankName,
                        "Account Name":data.acctName,
                        "Account Number":data.acctNo,
                        "Amount":data.amount
                    }));


interface BankTransactionDetailsProps{
    bankName:string,
    acctName:string,
    acctNo:string,
    amount:string|number
}

const BankTransactionDetails = ()=>{
    const data = useSelector(_bankSelector);
    const state = useSelector(d=>d);

    return <SimpleFieldTable data={data}/>;
}


const _walletSelector = createSelector((state:any)=>state.exchange.paymentInfo,
                    (ex:any)=>ex.crypto??{}
                    );

interface WalletTransactionDetailsProps{
    name:string,
    baseName?:string,
    address:string,
    amount:string|number
}

const WalletTransactionDetails = ()=>{
    const {name, baseName, address, amount}:any = useSelector(_walletSelector);

    return (
        <Stack spacing={1}>
            <Box>
                <Typography>Wallet Crypto: <b>{name} <i>{`(${baseName})`}</i></b></Typography>
                <Typography>Amount: <b>{amount}</b></Typography>
            </Box>
            <TextField 
            margin="dense"
            defaultValue={address}
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
    );
}

export default ()=>
    <>
        <BankTransactionDetails/>
        <WalletTransactionDetails/>
    </>
;

