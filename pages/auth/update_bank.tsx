import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import FormProvider from "../../components/Form";
import {Input, InputAction} from "../../components/Form/UpdateForm";


import * as yup from "yup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


const bankInfoData = [
    {name:"bankName", label:"Bank Name"},
    {name:"acctNo", label:"Account Number"},
    {name:"acctName", label:"Account Name"},
];


const schema = yup.object({
    bankName: yup.string().required(),
    acctNo: yup.string().required(),
    acctName:yup.string().required()
  }).required();

const UpdateBankForm = ()=>{
    const submit = console.log;

    return (
    <FormProvider schema={schema}>
        <Paper elevation={3} sx={{p:2}}>
            <Stack spacing={2}>
                <Typography variant="h6">Bank Information</Typography>
                {bankInfoData.map((d)=><Input key={d.name} {...d}/>)}
            </Stack> 

            <InputAction action={submit} label=""/>
            
        </Paper>
    </FormProvider>
    );
}

export default function(){
    return (
        <Box>
            <BackHeader title="Update Info" color="neutral"/>
                <Container sx={{pt:8,pb:3}}>
                    <UpdateBankForm/>
                </Container>
        </Box>
    );
}