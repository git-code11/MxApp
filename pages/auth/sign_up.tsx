import React from "react";

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

import Caption from "../../components/Link/Caption";
import FormProvider  from "../../components/Form";
import { InputAction, Input} from "../../components/Form/AuthForm";

import * as yup from "yup";

import * as regex_test from "../../components/input_test";

import {useAuthentication, useSignUp} from "../../hooks/auth";

const fields  = [
    {name:"userName", label:"User Name", icon:<UserIcon/>, type:"text"},
    {name:"email", label:"Email", icon:<EmailIcon/>, type:"email"},
    {name:"phoneNumber", label:"Phone", icon:<PhoneIcon/>, type:"tel"},
    {name:"password", label:"Password", icon:<PasswordIcon/>, type:"password"},
    {name:"confirmPassword",label:"Confirm Password", icon:<ConfirmPasswordIcon/>, type:"password"}
];


const schema = yup.object({
    userName: yup.string().min(7).matches(regex_test.name,"should consist of ._~A-Za-z0-9").required(),
    email: yup.string().matches(regex_test.email, "email invalid").required(),
    phoneNumber:yup.string().matches(regex_test.tel, "Invalid telephone number").required(),
    password:yup.string().min(4).required(),
    confirmPassword:yup.string().test("ref password","not matched",(value, ctx)=>value === ctx.parent?.password)
  }).required();



const SignUpForm = ()=>{

    const {email:submit} = useSignUp();

    return (
        <FormProvider schema={schema}>
            <Stack spacing={2}>
                {fields.map(d=><Input key={d.name} {...d}/>)}
                <Stack alignItems="center">
                <InputAction action={submit} label="CREATE"/>
                </Stack>
            </Stack>
        </FormProvider>
    );
}

export default function(){
    
    useAuthentication((d:any)=>!d,'/home');

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

                    <SignUpForm/>
                    
                    <Caption text1="Already have an account?" text2="Log In" href="/auth/log_in"/>
                </Stack>
            </Box>
        </Box>
    );
};

