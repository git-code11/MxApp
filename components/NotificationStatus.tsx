import React, {useState, useCallback, useEffect} from "react";

import { Snackbar, Alert, AlertColor } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import {close} from "../redux/notify_status";

export default ()=>{
    const dispatch = useDispatch();
    const {status, open, message} = useSelector((state:any)=>state.notifyStatus);

    return (
        <Snackbar autoHideDuration={3000} open={open} onClose={()=>dispatch(close())}>
            <Alert severity={status as unknown as AlertColor}>
                {message}
            </Alert>
        </Snackbar>
    )
}