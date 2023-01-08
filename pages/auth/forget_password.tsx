

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import UserIcon from "@mui/icons-material/Person";

import BackHeader from "../../components/BackHeader";
import {Input, Button, Caption} from "../../components/AuthFormInput";


const fields  = [
    {name:"email", label:"Enter Email Address", icon:<UserIcon/>},
];

export default function(){
    return(
        <Box>
            <BackHeader title="Forget Password"/>

            <Box sx={{pt:12, pb:2, minHeight:"100vh", backgroundColor:"tertiary.main",".MuiSvgIcon-root":{color:"tertiary.contrastText"}}}>
                <Stack component={Container} 
                        spacing={5}
                        >
                    
                    <Typography variant="h5" align="center" sx={{textDecoration:"underline"}}>Recover Account</Typography>

                    <Stack spacing={4} alignItems="center">
                        {fields.map(d=><Input name={d.name} label={d.label} icon={d.icon}/>)}
                        <Button label="RECOVER" path="/auth/new_password"/>
                    </Stack>

                    <Caption text1="Do you want a new account?" text2="Click here" href="/auth/log_in"/>
                    
                </Stack>
            </Box>
        </Box>
    );
}