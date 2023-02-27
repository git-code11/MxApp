

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import UserIcon from "@mui/icons-material/Person";

import BackHeader from "../../components/BackHeader";

import Button from "../../components/Link/Button";
import Caption from "../../components/Link/Caption";
import {Input} from "../../components/Form/AuthForm";
import FormProvider from "../../components/Form";

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


                    <FormProvider>
                        <Stack spacing={4} alignItems="center">
                            {fields.map(d=><Input {...d}/>)}
                            <Button label="RECOVER" path="/auth/new_password"/>
                        </Stack>
                    </FormProvider>
                    

                    <Caption text1="Do you want a new account?" text2="Click here" href="/auth/log_in"/>
                    
                </Stack>
            </Box>
        </Box>
    );
}