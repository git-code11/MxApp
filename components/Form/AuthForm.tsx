import {useState} from "react";

import {styled} from "@mui/material/styles";

import MuiTextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MuiButton from "@mui/material/Button";

import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";

import {FormAction, FormInput} from ".";


const OutlinedInput = styled(MuiTextField)(({theme})=>({
    ".MuiOutlinedInput-notchedOutline":{
        borderRadius:theme.spacing(4),
        borderColor:"transparent",
        boxShadow:"5px 5px 13px #cccccc, -5px -5px 13px #f0f8ff",
    }
}));


interface InputContainerProps{
    name:string,
    label:string,
    icon?:any,
    helperText?:string,
    errorText?:string,
    type?:string,
    error?:any
    value?:any,
    inputRef?:any,
    onChange?:any,
    onBlur?:any
}

const InputContainer = (props:InputContainerProps)=>{
    const [visible, setVisible] = useState(false);

    const {value, error, errorText, helperText, 
            type, icon, onChange, onBlur, 
            inputRef, label, name} = props;

    return (
        <OutlinedInput
        error={!!error?.type}
        helperText={((!!error?.type)?(errorText??error?.message):helperText) as string}
        variant="outlined"
        autoComplete="off"
        type={type==="password" && visible?"text":type}
        InputProps={{
            startAdornment:<InputAdornment position="start">{icon}</InputAdornment>,
            endAdornment:(type==="password"?<InputAdornment position="end">
                                <IconButton onClick={ ()=>setVisible(d=>!d) }>
                                    {visible?<Visibility/>:<VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>:null)
        }}

        {...{onChange, onBlur, value, inputRef, name}}
        placeholder={label}
        fullWidth/>
    );
}


const Input = FormInput(InputContainer);
   

interface InputActionContainer{
    label:string,
    disabled?:boolean,
    onClick:Function
}

const InputActionContainer = ({label, disabled, onClick}:InputActionContainer)=>{

    return (
        <MuiButton color="primary" variant="contained" sx={{borderRadius:20, px:4, py:1.8}} 
            disabled={disabled} onClick={onClick as any}>{label}</MuiButton>

    );
}

const InputAction = FormAction(InputActionContainer);

export {InputAction, Input}

