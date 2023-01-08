import {styled} from "@mui/material/styles";

import Typography from '@mui/material/Typography';

import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import MuiBadge from "@mui/material/Badge"
import Stack from "@mui/material/Stack"
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";

interface FormInputProps{
    name:string,
    label:string,
    required?:boolean,
    options?:string[],
}


const FormInput = ({label, name, required, options}:FormInputProps)=>
    <TextField
            fullWidth
            select={options?true:false}
            variant="standard"
            required={required}
            label={label || name}
            name={name}
    >
        {options?.map(option=><MenuItem key={option} value={option}>{option}</MenuItem>)}
    </TextField>

const Badge = styled(MuiBadge)(()=>({
    ".MuiBadge-anchorOriginBottomRight":{
        right:25,
        bottom:30
    }
}));

interface FormPicsProps{
    name?:string,
    path?:string
}

const FormPics = (props:FormPicsProps)=>{
    return (
    <Stack direction="row" justifyContent="center">
        <Badge 
        anchorOrigin={{horizontal:"right", vertical:"bottom"}}
        overlap="circular" 
        badgeContent={
        <Fab component="label" color="secondary" size="small">
            <input hidden name={props.name??"image"} accept="image/*" type="file"/>
            <EditIcon/>
        </Fab>
        }>
            <Avatar sx={{width:150,height:150}} src={props.path??""}/>
        </Badge>
    </Stack>
    )
}

interface FormFieldListProps{
    title:string,
    data:FormInputProps[],
    pics?:FormPicsProps
};

export default ({title, data, pics}:FormFieldListProps)=>{
    return (
        <Stack spacing={2}>
            <Typography variant="h6">{title}</Typography>
            {pics?<FormPics {...pics}/>:""}
            {data.map((props)=><FormInput key={props.name} {...props}/>)}
        </Stack> 
    );
};
