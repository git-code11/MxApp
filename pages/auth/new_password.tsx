

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import PasswordIcon from "@mui/icons-material/LockOutlined";
import ConfirmPasswordIcon from "@mui/icons-material/LockOpenOutlined";

import BackHeader from "../../components/BackHeader";
import {Input, Button, Caption} from "../../components/AuthFormInput";


const fields  = [
    {name:"password", label:"Enter new Password", icon:<PasswordIcon/>},
    {name:"confirm_password",label:"Confirm Password", icon:<ConfirmPasswordIcon/>}
];

export default function(){
    return(
        <Box>
            <BackHeader title="Create new password"/>

            <Stack component={Container} 
                    spacing={5}
                    sx={{pt:12, pb:2, minHeight:"100vh", backgroundColor:"tertiary.main",".MuiSvgIcon-root":{color:"tertiary.contrastText"}}}>
                
                <Typography variant="h5">Change Account Password now</Typography>

                <Stack spacing={3}>
                    {fields.map(d=><Input name={d.name} label={d.label} icon={d.icon}/>)}
                </Stack>
                
                <Stack alignItems="center">
                    <Button label="SAVE" path="/auth/log_in"/>
                </Stack>
            
            </Stack>
        </Box>
    );
}