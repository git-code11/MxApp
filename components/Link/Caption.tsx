import NextLink from "next/link";
import Typography from '@mui/material/Typography';
import {blue} from "@mui/material/colors";
import MuiLink from "@mui/material/Link";

const Caption = ({text1, text2, href}:{text1:string, text2:string, href?:string})=>
    <Typography align="center">
        {text1}
        <MuiLink href={href??"#"} component={NextLink} sx={{color:blue[900], fontWeight:"bold"}}>{text2}</MuiLink>
    </Typography>
;

export default Caption;