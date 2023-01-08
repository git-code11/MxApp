
import Alert from "@mui/material/Alert";

import { Snackbar } from "@mui/material";


interface ViewNotificationProps{
    active:boolean,
    title:string,
    info?:any
}

export default (props:ViewNotificationProps)=>
    <Snackbar open={props.active} autoHideDuration={3000} anchorOrigin={{horizontal:"center","vertical":"top"}}>
        <Alert severity={props.info??"info"} sx={{width:"100%"}}>{props.title}</Alert>
    </Snackbar>
;