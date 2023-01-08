

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import UserIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/LockOutlined";
import ConfirmPasswordIcon from "@mui/icons-material/LockOpenOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneAndroidOutlined";

import BackHeader from "../../components/BackHeader";
import {Input, Button, Caption} from "../../components/AuthFormInput";


const fields  = [
    {name:"user_name", label:"User Name", icon:<UserIcon/>},
    {name:"email", label:"Email", icon:<EmailIcon/>},
    {name:"phone_number", label:"Phone", icon:<PhoneIcon/>},
    {name:"password", label:"Password", icon:<PasswordIcon/>},
    {name:"confirm_password",label:"Confirm Password", icon:<ConfirmPasswordIcon/>}
];

export default function(){
    return(
        <Box>
            <BackHeader/>

            <Box sx={{pt:9, pb:2, minHeight:"100vh", backgroundColor:"tertiary.main",".MuiSvgIcon-root":{color:"tertiary.contrastText"}}}>
                <Stack component={Container} 
                        spacing={4}
                        >
                    
                    <Stack spacing={0.25} alignItems="center">
                        <Typography variant="h5" fontWeight="bold">Let's Get Started!</Typography>
                        <Typography variant="body2">Log in to your account and start swapping</Typography>
                    </Stack>

                    <Stack spacing={2}>
                        {fields.map(d=><Input name={d.name} label={d.label} icon={d.icon}/>)}
                    </Stack>
                    
                    <Stack alignItems="center">
                        <Button label="CREATE"/>
                    </Stack>
                
                    <Caption text1="Already have an account?" text2="Log In" href="/auth/log_in"/>
                </Stack>
            </Box>
        </Box>
    );
}