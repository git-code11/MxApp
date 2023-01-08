import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";

export interface TransctionStatusProps{
    id?:string,
    status?:"info"|"success"|"error",
    statusText?:"Idle"|"Successful"|"Processing"|"Failed"
}

export default (props:TransctionStatusProps)=>
    <Alert severity={props.status}>
        <AlertTitle>
            <Typography noWrap>
                <b>Transcation ID:</b>
                <u>{props.id}</u>
            </Typography>
        </AlertTitle>
        <Typography><b>Status: </b><u>{props.statusText}</u></Typography>
    </Alert>
;