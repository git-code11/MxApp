
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import {ViewSectionProps} from "../Base";

import MenuItem from '@mui/material/MenuItem';


interface Option {
    label:string
    value?:string|number
}

interface Field {
    name:string,
    label:string,
    value:any,
    option?: Option[]
}

interface SelectionProps extends ViewSectionProps{
    fields:Field[]
}

export default (props:SelectionProps)=>
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography>Select the right value for Exchange Pair</Typography>
            {props.fields.map(d=>
            <TextField key={d.name} select={d.option?true:false} name={d.name} label={d.label} fullWidth>
                {d.option?.map(f=><MenuItem key={f.value??f.label} value={f.value??f.label}>{f.label}</MenuItem>)}
            </TextField>)}
            <Button sx={{py:2}} variant="contained" color="primary" onClick={props.onNext}>Review</Button>
        </Stack>
    </Paper>
;