import React from "react";

import { Snackbar, Alert, AlertColor } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import {close} from "../redux/notify_status";

export default ()=>{
    const dispatch = useDispatch();
    const {status, open, message} = useSelector((state:any)=>state.notifyStatus);

    return (
        <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"center"}} autoHideDuration={4000} open={open} onClose={()=>dispatch(close(null))}>
            <Alert sx={{flexGrow:1}} severity={status as unknown as AlertColor}>
                {message}
            </Alert>
        </Snackbar>
    )
}