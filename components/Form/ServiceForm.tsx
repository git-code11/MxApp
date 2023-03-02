
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";

import MenuItem from "@mui/material/MenuItem";

import UploadIcon from "@mui/icons-material/UploadFile";

import {FormAction, FormInput, FormRefInput, FormImage} from ".";
import Button from "@mui/material/Button";
import { Grid, Typography, Stack } from "@mui/material";
import { useEffect } from "react";


interface InputContainerProps{
    name:string,
    label:string,
    type?:string
    helperText?:string,
    errorText?:string,
    error?:any
    value?:any,
    inputRef?:any,
    onChange?:any,
    onBlur?:any,
    readOnly?:boolean
}



const InputContainer = (props:InputContainerProps)=>{

    const {type, error, name, errorText, helperText, label, onChange, onBlur, value, inputRef, readOnly} = props;
 
    return (
        <TextField
                type={type}
                error={!!error?.type}
                helperText={((!!error?.type)?(errorText??error?.message):helperText) as string}
                fullWidth
                {...{onChange, onBlur, value, inputRef, name, label, readOnly}}
                value={value??""}
        />
    );
}

const Input = FormInput(InputContainer);


interface SelectContainerProps extends InputContainerProps{
    options:any
}

const SelectContainer = (props:SelectContainerProps)=>{

    const {options, error, name, errorText, helperText, label, onChange, onBlur, value, inputRef, readOnly} = props;
 
    return (
        <TextField select
                error={!!error?.type}
                helperText={((!!error?.type)?(errorText??error?.message):helperText) as string}
                fullWidth
                {...{onChange, onBlur, value, inputRef, name, label, readOnly}}
                value={value??""}
        >
            {options?.map((option:any)=><MenuItem key={option.value} value={option.value}>{option?.label ?? option.value}</MenuItem>)}
        </TextField>
    );
}

const Select = FormInput(SelectContainer);

const SelectRef = FormRefInput(({cbData, ...props})=><Select {...props} options={cbData??[]}/>);


interface InputActionContainer{
    label:any,
    disabled?:boolean,
    onClick?:any,
    [key:string]:any
}

const InputActionContainer = (props:InputActionContainer)=>{
    const {onClick, disabled, label, ...btnProps} = props;
    return (
        <Button {...{disabled, onClick}} {...btnProps}>{label}</Button>
    );
}

const InputAction = FormAction(InputActionContainer);

interface UploadBtnContainerprops{
    upload:any,
    error?:any,
    label:string
    [key:string]:any
}

const UploadBtnContainer = (props:UploadBtnContainerprops)=>{
    const {value, error, upload, label, files, onValueChange,showMetadata, ...moreProps} = props;

    useEffect(()=>{ 
        if(value !== undefined)
            onValueChange?.(value);
    },[value]);


    return (
        <Stack spacing={1}>
            <Button sx={{py:2}} {...moreProps} onClick={upload}>{label}</Button>
            <Typography variant="caption" fontWeight="bold" color={error?.type?"error":"info"}>{value?.length>0?"LOADED":error?.message}</Typography>
            {value && files && showMetadata && 
                <Grid container>
                    <Grid item xs={9}>
                        <Typography noWrap>
                            <b>FileName: </b>
                            <u>{files[0]?.name}</u>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <b>{((files[0]?.size??0)/1024)?.toFixed(2)}kb</b>
                    </Grid>
            </Grid>}
        </Stack>
    )
}

const UploadBtn = FormImage(UploadBtnContainer);


export {Input, Select, SelectRef, InputAction, UploadBtn}