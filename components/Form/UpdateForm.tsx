
import {styled} from "@mui/material/styles";

import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import MuiBadge from "@mui/material/Badge"
import Stack from "@mui/material/Stack"
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";

import SaveIcon from "@mui/icons-material/Save";

import { Typography, Box } from "@mui/material";

import {FormAction, FormInput, ComboBox, FormImage, FormRefInput} from ".";


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
    onBlur?:any
}



const InputContainer = (props:InputContainerProps)=>{

    const {type, error, name, errorText, helperText, label, onChange, onBlur, value, inputRef} = props;
 
    return (
        <TextField
                type={type}
                error={!!error?.type}
                helperText={((!!error?.type)?(errorText??error?.message):helperText) as string}
                fullWidth
                variant="standard"
                {...{onChange, onBlur, value, inputRef, name, label}}
                value={value??""}
        />
    );
}

const Input = FormInput(InputContainer);


interface SelectContainerProps extends InputContainerProps{
    options:any
}


const SelectContainer = (props:SelectContainerProps)=>{

    const {options, error, name, errorText, helperText, label, onChange, onBlur, value, inputRef} = props;
 
    return (
        <TextField select
                error={!!error?.type}
                helperText={((!!error?.type)?(errorText??error?.message):helperText) as string}
                fullWidth
                variant="standard"
                {...{onChange, onBlur, value, inputRef, name, label}}
                value={value??""}
        >
            {options?.map((option:any)=><MenuItem key={option.value} value={option.value}>{option?.label ?? option.value}</MenuItem>)}
        </TextField>
    );
}

const Select = FormInput(SelectContainer);


interface ComboSelectContainerProps{
    name:string,
    label:string,
    renderInputProps:any,
    error?:any,
    helperText?:any,
    errorText?:any
}

const ComboSelectContainer = (props:ComboSelectContainerProps)=>{
    const {renderInputProps, helperText, errorText, label, error} = props;
   
    return (
    <TextField
            label={label}
            helperText={((!!error?.type)?(errorText??error?.message):helperText) as string} 
            variant="standard"
            error={!!error?.type}
            {...renderInputProps}
            />);
}


const ComboSelect = ComboBox(ComboSelectContainer);


const ComboSelectRef = FormRefInput(({cbData, ...props})=><ComboSelect {...props} options={cbData??[]}/>);


interface InputActionContainer{
    icon?:any,
    disabled?:boolean,
    onClick?:any
}

const InputActionContainer = (props:InputActionContainer)=>{
    const {onClick, disabled, icon} = props;
    return (
        <Fab color="primary" sx={{position:"fixed", bottom:"20vmin", right:"5vmin"}}  {...{disabled, onClick}}>
            {icon??<SaveIcon/>}
        </Fab>
    );
}

const InputAction = FormAction(InputActionContainer);


const Badge = styled(MuiBadge)(()=>({
    ".MuiBadge-anchorOriginBottomRight":{
        right:25,
        bottom:30
    }
}));


interface InputImageContainerProps{
    name:string,
    value?:any,
    upload:any,
    error?:any,
    helperText?:string,
    errorText?:string
}


const InputImageContainer = (props:InputImageContainerProps)=>{
    const {value, upload, error, helperText, errorText} = props;
    
    return (
    <Box>
        <Stack direction="row" justifyContent="center">
            <Badge 
            anchorOrigin={{horizontal:"right", vertical:"bottom"}}
            overlap="circular" 
            badgeContent={
            <Fab component="label" color="secondary" size="small" onClick={upload}>
                <EditIcon/>
            </Fab>
            }>
                <Avatar sx={{width:150,height:150}} src={value??""}/>
            </Badge>
        </Stack>
        <Typography component="div" variant="caption" fontSize="small" align="center" color={(error && !!error?.type)?"error":"info"}>
            {((error && !!error?.type)?(errorText??error?.message):helperText) as string}
        </Typography>
    </Box>
    )
}



const InputImage = FormImage(InputImageContainer);


export {Input, Select, ComboSelect, InputAction, InputImage, ComboSelectRef}