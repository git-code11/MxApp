
import {useCallback} from "react";

import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import {useNext} from "./Provider";

import FormProvider from "../../Form";
import {Input,Select, SelectRef, InputAction} from "../../Form/ServiceForm";

import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";
import {addService} from "../../../redux/exchange";


const market = {
    services:[
        {label:"Service Crypto",value:"SCP"},
        {label:"Service Bank Cash",value:"SBC"}
    ],
    quantity:{
        SCP:Array(3).fill(0).map((_,i)=>({label:"Quantity SCP_"+i,value:"Q_SCP_"+i})),
        SBC:Array(3).fill(0).map((_,i)=>({label:"Quantity SBC_"+i,value:"Q_SBC_"+i}))
    }
} as any;

const fields=[
    {name:"description", label:"Description"},
    {name:"type", label:"Exchange Service",  options:market.services},
    {name:"quantity", label:"Exchange Quantity", refName:"type", onRefChange:(v:string, cb:any)=>cb(market.quantity[v])}    
] as any;

const schema = yup.object({
    description: yup.string().required(),
    type: yup.string().required(),
    quantity:yup.string().required()
  }).required();


const _selector = createSelector((state:any)=>state.exchange, 
(data:any)=>({
    ...data.service,
    description:data.description
}));


const SelectionForm = ()=>{
    const next:any = useNext();
    const dispatch = useDispatch();

    const data = useSelector(_selector);

    const submit = useCallback((data: any)=>{
        dispatch(addService(data));
        next();
    },[dispatch, next]);

    return (
        <FormProvider schema={schema} defaultValues={data}>

            <Stack spacing={2}>
                <Input {...fields[0]}/>
                <Select {...fields[1]}/>
                <SelectRef {...fields[2]}/>
                <InputAction 
                        {...{ sx:{py:2}, variant:"contained", color:"primary" }} 
                        action={submit} 
                        label="Review"/>
            </Stack>
        </FormProvider>
    );
}

export default ()=>{

    return (
    <Paper sx={{p:2}}>
        <Stack spacing={5}>
            <Typography>Select the right value for Exchange Pair</Typography>
            <SelectionForm/>
        </Stack>
    </Paper>
    );
}
;