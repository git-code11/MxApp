
import NextLink from "next/link";
import {styled} from "@mui/material/styles";
import {blue} from "@mui/material/colors";
import MuiOutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MuiButton from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import {Link} from "./Link";

const OutlinedInput = styled(MuiOutlinedInput)(({theme})=>({
    ".MuiOutlinedInput-notchedOutline":{
        borderRadius:theme.spacing(4),
        borderColor:"transparent",
        boxShadow:"5px 5px 13px #cccccc, -5px -5px 13px #f0f8ff",
    }
}));

interface InputFieldProps{
    label:string,
    name:string,
    icon:any,
    type?:string
}

const Input = ({label, name, icon, type}:InputFieldProps)=>
    <OutlinedInput 
        autoComplete="off"
        type={type}
        startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
        name={name}
        placeholder={label}
        fullWidth/>
;

const Button = ({label, path}:{label:string, path?:string})=>
    <MuiButton component={NextLink} href={path??""} variant="contained" color="primary" sx={{borderRadius:20, px:8, py:1.8}}>{label}</MuiButton>
;

const Caption = ({text1, text2, href}:{text1:string, text2:string, href?:string})=>
    <Typography align="center">
        {text1}
        <Link href={href} sx={{color:blue[900], fontWeight:"bold"}}>{text2}</Link>
    </Typography>
;

export {Input, Button, Caption}

