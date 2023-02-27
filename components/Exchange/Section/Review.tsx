
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";

import SimpleFieldTable from "../../SimpleFieldTable";

import {useNext} from "./Provider";
import { createSelector } from "@reduxjs/toolkit";
import {useSelector} from "react-redux";


const exchangeSelector = createSelector((state:any)=>state.exchange, 
                    (data:any)=>({
                        Service:data.service.type,
                        Quantity:data.service.quantity,
                        Description:data.description
                    }));

export default ()=>{
    const next:any = useNext();
    
    const data = useSelector(exchangeSelector);
    
    return (
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography>Review Transaction Information</Typography>
            <SimpleFieldTable data={data}/>
            <Stack direction="row" justifyContent="right">
                <Button sx={{py:2}} endIcon={<ArrowForwardIcon/>} variant="contained" color="warning" onClick={next}>Proceed</Button>
            </Stack>
        </Stack>
    </Paper>);
}
;