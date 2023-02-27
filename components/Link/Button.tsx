import NextLink from "next/link";
import MuiButton from "@mui/material/Button";

const Button = ({label, path, disabled}:{label:string, path?:string, disabled?:boolean})=>
    <MuiButton component={NextLink} href={path??"#"} variant="contained" disabled={disabled} 
                color="primary" sx={{borderRadius:20, px:8, py:1.8}}>{label}</MuiButton>
;

export default Button;