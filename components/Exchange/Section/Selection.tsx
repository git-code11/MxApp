
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";


import FormProvider,{useForm} from "../../Form";
import {Input,Select, SelectRef, InputAction} from "../../Form/ServiceForm";

import * as yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";

import {useNav, useQuery} from ".";

import { useEffect, useMemo } from 'react';


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


const ServiceField = ()=>{
    const {next}:any = useNav();

    const dispatch = useDispatch();

    const {setValue} = useForm();
    const query = useQuery();
    const serviceSpecified = useMemo(()=>market.services.map((d:any)=>d.value).includes(query?.type),[query?.type]);

    useEffect(()=>{
        if(serviceSpecified){
            setValue("type",query?.type);
            setValue("quantity", "");
            setValue("description", "");
        }
    },[serviceSpecified, query?.type]);


    const submit = (data:any)=>{

        dispatch(addService({...data}));
        next();
    }

    return (
        <Stack spacing={2}>
            <Input {...fields[0]}/>
            <Select {...fields[1]}/>
            <SelectRef {...fields[2]}/>
            <InputAction 
                    {...{ sx:{py:2}, variant:"contained", color:"primary" }} 
                    action={submit} 
                    label="Review"/>
        </Stack>
    );
}

const SelectionForm = ()=>{

    const data = useSelector(_selector);

    return (
        <FormProvider schema={schema} defaultValues={data}>
            <ServiceField/>
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