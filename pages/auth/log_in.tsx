
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import MuiButton from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import UserIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/LockOutlined";

import {Input, Button, Caption} from "../../components/AuthFormInput";
import {Link} from "../../components/Link";

const fields = [
    {name:"user_name", label:"User Name", icon:<UserIcon/>},
    {name:"password", label:"Password", icon:<PasswordIcon/>}
]

export default function(){
    return(
        <Stack component={Container} spacing={2} justifyContent="space-between" 
            sx={{pt:3, pb:3, minHeight:"100vh", backgroundColor:"tertiary.main",".MuiSvgIcon-root":{color:"tertiary.contrastText"}}}>
            
            <Stack component={Box} spacing={0.25} alignItems="center">
                <Avatar variant="square" src="/welcome.png" sx={{width:"auto", height:150}}/>
                <Typography variant="h5" fontWeight="bold">Welcome Back!</Typography>
                <Typography variant="body2">Log in to your account and start swapping</Typography>
            </Stack>

            <Stack spacing={2}>
                
                {fields.map(d=><Input key={d.name} name={d.name} label={d.label} icon={d.icon}/>)}
                
                <Stack direction="row" justifyContent="end">
                    <Typography component={Link} href="/auth/forget_password" align="right" sx={{textDecoration:"underline"}}>Forget Password?</Typography>
                </Stack>

            </Stack>
            
            <Stack alignItems="center">
                <Button path="/home" label="LOG IN"/>
            </Stack>
            
            <Stack spacing={1}>
                <Typography variant="body2" color="grey" align="center">Or Connect Using</Typography>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <MuiButton startIcon={<Avatar variant="square" src="/fb.png"/>} variant="contained" size="small" sx={{backgroundColor:"#0d2059 !important", color:"primary.contrastText"}}>Facebook</MuiButton>
                    <MuiButton startIcon={<Avatar variant="square" src="/google.png"/>} variant="contained" size="small" sx={{backgroundColor:"#fbbc05 !important", color:"primary.contrastText"}}>Google</MuiButton>
                </Stack>
            </Stack>

            <Caption text1="Don't Have an account?" text2="Sign Up" href="/auth/sign_up"/>
        </Stack>
    );
}