import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";

import {useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";

const _selector = createSelector((state:any)=>state.exchange,(ex)=>ex.transaction);

export interface TransctionStatus{
    id?:string,
    status?:"info"|"success"|"error",
    statusText?:"Idle"|"Successful"|"Processing"|"Failed"
}

export default ()=>{
    const {id, status, statusText}:any = useSelector(_selector);

    return (
        <Alert severity={status??"info"}>
            <AlertTitle>
                <Typography noWrap>
                    <b>Transcation ID:</b>
                    <u>{id}</u>
                </Typography>
            </AlertTitle>
            <Typography><b>Status: </b><u>{statusText}</u></Typography>
        </Alert>
    );
}
;